import {
  reactExtension,
  Banner,
  useOrder,
  Card,
  Grid,
  BlockStack,
  Heading,
  Text,
  TextBlock,
  InlineLayout,
  Icon,
  View,
  Pressable,
  Disclosure,
  Button,
  Form,
  TextField,
  Divider,
  Image,
  InlineStack,
  Select,
  PhoneField,
  Stepper,
  ProductThumbnail,
  ChoiceList,
  Choice,
  Link,
  Switch,
  Checkbox,
  Modal,
  ToggleButtonGroup,
  ToggleButton,
  BlockLayout,
  useApi,
  ScrollView,
  SkeletonTextBlock,
  Spinner,
  SkeletonImage,
  SkeletonText
} from '@shopify/ui-extensions-react/customer-account'
import { useEffect, useState } from 'react'
import { countries, provinces, taxIdCountries } from './lib/countries'
import formatCurrency from './lib/currencies'
import countryTaxIds from './lib/countryTaxIds'

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />
)

function Extension() {
  const [openId, setOpenId] = useState([])
  const [settings, setSettings] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [loadingState, setLoadingState] = useState({})
  const [defaultData, setDefaultData] = useState({})

  const { shop, order, buyerIdentity } = useApi()
  const order_id = order?.current?.id
  const orderName = order?.current?.name
  const shopUrl = shop?.myshopifyDomain
  const email = buyerIdentity?.email?.current
  const handleDisclosure = (open) => {
    setOpenId(open)
  }

  const prepareHeaders = (headers) => {
    headers.set('Accept', 'application/json')
    headers.set('Content-Type', 'application/json')
    return headers
  }

  useEffect(() => {
    const fetchApiData = async () => {
      const sanitizedOrderName = orderName.replace('#', '')
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `https://order-editing-staging.cleversity.com/api/storefront/process-eligible-order?order_name=${sanitizedOrderName}&shop_url=${shopUrl}&email=${email}`,
          {
            method: 'GET',
            headers: prepareHeaders(new Headers())
          }
        )
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setSettings(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchApiData()
  }, [orderName, shopUrl, email])

  const handleDefaultData = async (slug, cursor = null) => {
    setError(null)
    setLoadingState((prev) => ({ ...prev, [slug]: true }))

    if (slug === 'add_another_product') {
      try {
        const response = await fetch(
          `https://order-editing-staging.cleversity.com/api/storefront/get-all-product?cursor=${
            cursor || ''
          }&limit=4&shop_url=${shopUrl}`,
          {
            method: 'GET',
            headers: prepareHeaders(new Headers())
          }
        )

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const { data } = await response.json()

        const { nodes: products, pageInfo } = data

        setDefaultData((prev) => {
          const existingProducts = prev[slug]?.products || []
          const newProducts = products.filter(
            (product) => !existingProducts.some((p) => p.id === product.id)
          )

          return {
            ...prev,
            [slug]: {
              ...(prev[slug] || {}),
              products: [...existingProducts, ...newProducts],
              pageInfo
            }
          }
        })
      } catch (err) {
        setError(err.message)
      } finally {
        setLoadingState((prev) => ({ ...prev, [slug]: false }))
      }
      return
    }

    // Default case for other slugs
    const sanitizedOrderName = orderName.replace('#', '')
    try {
      const response = await fetch(
        `https://order-editing-staging.cleversity.com/api/storefront/process-order-edit?order_name=${sanitizedOrderName}&shop_url=${shopUrl}&slug=${slug}`,
        {
          method: 'GET',
          headers: prepareHeaders(
            new Headers({
              'Content-Type': 'application/json'
            })
          )
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setDefaultData((prev) => ({ ...prev, [slug]: data }))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoadingState((prev) => ({ ...prev, [slug]: false }))
    }
  }
  console.log(settings)
  return (
    <View
      cornerRadius='large'
      border={'base'}
      padding={['base', 'base', 'base', 'base']}>
      <BlockStack spacing='none'>
        <BlockStack padding={['base', 'base', 'base', 'base']}>
          <Heading level={1}>Edit Order</Heading>
          <Divider />
        </BlockStack>
        {loading ? (
          <BlockStack spacing={'base'}>
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonTextBlock key={i} size='extraLarge' />
            ))}
          </BlockStack>
        ) : (
          settings?.data?.menus?.map((option) => (
            <Disclosure
              key={option?.id}
              onToggle={(open) => handleDisclosure(open)}>
              <Pressable
                toggles={option?.slug}
                padding='base'
                onPress={() => handleDefaultData(option?.slug)}>
                <InlineLayout
                  blockAlignment='center'
                  spacing='base'
                  columns={['auto', 'fill', 'auto']}>
                  <Icon source={option.icon} appearance='monochrome' />
                  <Heading>{option.name}</Heading>
                  <Icon
                    source={openId.includes(option?.slug) ? 'minus' : 'plus'}
                    appearance='monochrome'
                  />
                </InlineLayout>
              </Pressable>
              {option?.slug == 'shipping_address' && (
                <ShippingAddress
                  shopUrl={shopUrl}
                  order_id={order_id}
                  defaultData={defaultData['shipping_address']}
                  isLoading={loadingState['shipping_address']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'change_contact_info' && (
                <ContactInformation
                  shopUrl={shopUrl}
                  order_id={order_id}
                  defaultData={defaultData['change_contact_info']}
                  isLoading={loadingState['change_contact_info']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'change_product_quantities' && (
                <ChangeProductQuantities
                  shopUrl={shopUrl}
                  order_id={order_id}
                  defaultData={defaultData['change_product_quantities']}
                  isLoading={loadingState['change_product_quantities']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'upgrade_shipping_method' && (
                <UpgradeShippingMethod
                  defaultData={defaultData['upgrade_shipping_method']}
                  isLoading={loadingState['upgrade_shipping_method']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'request_order_cancel' && (
                <CancelOrder
                  orderName={orderName}
                  shopUrl={shopUrl}
                  order_id={order_id}
                  defaultData={defaultData['request_order_cancel']}
                  isLoading={loadingState['request_order_cancel']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'download_invoice' && (
                <DownloadInvoice
                  shopUrl={shopUrl}
                  order_id={order_id}
                  defaultData={defaultData['download_invoice']}
                  isLoading={loadingState['download_invoice']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'edit_gift_message' && (
                <EditGiftMessage
                  shopUrl={shopUrl}
                  order_id={order_id}
                  defaultData={defaultData['edit_gift_message']}
                  isLoading={loadingState['edit_gift_message']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'change_payment_method' && (
                <ChangePaymentMethod
                  defaultData={defaultData['change_payment_method']}
                  isLoading={loadingState['change_payment_method']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'add_another_product' && (
                <AddAnotherProduct
                  handleDefaultData={handleDefaultData}
                  defaultData={defaultData['add_another_product']}
                  isLoading={loadingState['add_another_product']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'change_size_variant' && (
                <ChangeProductSizeAndVariant
                  shopUrl={shopUrl}
                  order_id={order_id}
                  defaultData={defaultData['change_size_variant']}
                  isLoading={loadingState['change_size_variant']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'switch_product' && (
                <SwitchProduct
                  shopUrl={shopUrl}
                  order_id={order_id}
                  defaultData={defaultData['switch_product']}
                  isLoading={loadingState['switch_product']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'contact_customer_support' && (
                <ContactCustomerSupport
                  orderName={orderName}
                  shopUrl={shopUrl}
                  order_id={order_id}
                  defaultData={defaultData['contact_customer_support']}
                  isLoading={loadingState['contact_customer_support']}
                  optionName={option?.slug}
                />
              )}
            </Disclosure>
          ))
        )}
      </BlockStack>
    </View>
  )
}

const ShippingAddress = ({
  optionName,
  defaultData,
  isLoading,
  order_id,
  shopUrl
}) => {
  const { ui } = useApi()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [buttonText, setButtonText] = useState('Update')
  const [formErrors, setFormErrors] = useState({})
  const [updateDefaultShippingAddress, setUpdateDefaultShippingAddress] =
    useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    zip: '',
    provinceCode: '',
    countryCode: '',
    phone: ''
  })

  const handleCheckboxChange = (value) => {
    setUpdateDefaultShippingAddress(value)
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const prepareHeaders = (headers) => {
    headers.set('Accept', 'application/json')
    headers.set('Content-Type', 'application/json')
    return headers
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    const payload = {
      order_id: order_id,
      shop_url: shopUrl,
      update_default_address: updateDefaultShippingAddress,
      ...formData
    }

    try {
      const response = await fetch(
        'https://order-editing-staging.cleversity.com/api/storefront/update-shipping-address',
        {
          method: 'POST',
          headers: prepareHeaders(
            new Headers({
              'Content-Type': 'application/json'
            })
          ),
          body: JSON.stringify(payload)
        }
      )
      console.log(response)
      if (response.status === 201) {
        setSubmitSuccess(true)
        setButtonText('Updated')
        ui.forceDataRefresh(
          'Your shipping address has been successfully updated!'
        )
      } else {
        const errorData = await response.json()
        throw new Error(
          errorData.message || 'Failed to update the shipping address.'
        )
      }
    } catch (error) {
      setSubmitError(error.message || 'An error occurred while updating.')
    } finally {
      setIsSubmitting(false)
    }
  }
  useEffect(() => {
    if (!isLoading) {
      setFormData({
        firstName: defaultData?.data?.shipping_address?.firstName,
        lastName: defaultData?.data?.shipping_address?.lastName,
        address1: defaultData?.data?.shipping_address?.address1,
        address2: defaultData?.data?.shipping_address?.address2,
        city: defaultData?.data?.shipping_address?.city,
        zip: defaultData?.data?.shipping_address?.zip,
        provinceCode: defaultData?.data?.shipping_address?.provinceCode,
        countryCode: defaultData?.data?.shipping_address?.countryCodeV2,
        phone: defaultData?.data?.shipping_address?.phone
      })
    }
  }, [defaultData, isLoading])

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      {isLoading ? (
        <BlockStack spacing='base'>
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonTextBlock key={i} size='extraLarge' />
          ))}
        </BlockStack>
      ) : (
        <Form onSubmit={handleSubmit}>
          <BlockStack>
            <Select
              required
              label='Country/Region'
              options={countries}
              value={formData.countryCode}
              onChange={(value) => handleInputChange('countryCode', value)}
              error={formErrors.countryCode}
            />
            <InlineLayout columns={['fill', 'fill']} spacing='base'>
              <TextField
                required
                label='First Name'
                value={formData.firstName}
                onChange={(value) => handleInputChange('firstName', value)}
                error={formErrors.firstName}
              />
              <TextField
                required
                label='Last Name'
                value={formData.lastName}
                onChange={(value) => handleInputChange('lastName', value)}
                error={formErrors.lastName}
              />
            </InlineLayout>
            <PhoneField
              required
              label='Phone'
              autocomplete={true}
              value={formData.phone}
              onChange={(value) => handleInputChange('phone', value)}
              error={formErrors.phone}
            />
            <TextField
              required
              label='Address'
              value={formData.address1}
              onChange={(value) => handleInputChange('address1', value)}
              error={formErrors.address1}
            />
            <TextField
              label='Apartment, suite, etc. (Optional)'
              value={formData.address2}
              onChange={(value) => handleInputChange('address2', value)}
              error={formErrors.address2}
            />
            {formData.countryCode === 'US' && (
              <Select
                required
                label='Provinces'
                value={formData.provinceCode}
                options={provinces}
                onChange={(value) => handleInputChange('provinceCode', value)}
                error={formErrors.provinceCode}
              />
            )}
            <InlineLayout columns={['fill', 'fill']} spacing='base'>
              <TextField
                required
                label='City'
                value={formData.city}
                onChange={(value) => handleInputChange('city', value)}
                error={formErrors.city}
              />
              <TextField
                required
                label='ZIP Code'
                value={formData.zip}
                onChange={(value) => handleInputChange('zip', value)}
                error={formErrors.zip}
              />
            </InlineLayout>
            <Checkbox
              id='updateDefaultCheckbox'
              name='updateDefaultCheckbox'
              checked={updateDefaultShippingAddress}
              onChange={handleCheckboxChange}
              accessibilityLabel='Toggle to update your default shipping address'>
              Update your default address
            </Checkbox>

            {submitSuccess && (
              <Banner
                status='success'
                title='Your shipping address has been successfully updated!'
              />
            )}
            {submitError && <Banner status='warning' title={submitError} />}

            <Button accessibilityRole='submit' disabled={isSubmitting}>
              {isSubmitting ? <Spinner appearance='subdued' /> : buttonText}
            </Button>
          </BlockStack>
        </Form>
      )}
    </View>
  )
}

const ContactInformation = ({
  optionName,
  defaultData,
  isLoading,
  shopUrl,
  order_id
}) => {
  const { ui } = useApi()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [buttonText, setButtonText] = useState('Update contact information')
  const [formErrors, setFormErrors] = useState({})
  const [updateDefaultProfile, setUpdateDefaultProfile] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    phone: ''
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCheckboxChange = (value) => {
    setUpdateDefaultProfile(value)
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.email) {
      errors.email = 'Email is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email format.'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    const payload = {
      order_id: order_id,
      shop_url: shopUrl,
      update_profile: updateDefaultProfile,
      ...formData
    }

    try {
      const response = await fetch(
        'https://order-editing-staging.cleversity.com/api/storefront/update-contact-info',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )

      if (response.ok) {
        setSubmitSuccess(true)
        setButtonText('Updated')
        ui.forceDataRefresh(
          'Your contact information has been successfully updated!'
        )
      } else {
        const errorData = await response.json()
        throw new Error(
          errorData.message || 'Failed to update the contact information.'
        )
      }
    } catch (error) {
      setSubmitError(error.message || 'An error occurred while updating.')
    } finally {
      setIsSubmitting(false)
      setButtonText('Update contact information')
    }
  }

  useEffect(() => {
    if (!isLoading) {
      setFormData({
        email: defaultData?.data?.contact?.email || '',
        phone: defaultData?.data?.contact?.phone || ''
      })
    }
  }, [defaultData, isLoading])

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      {isLoading ? (
        <BlockStack spacing={'base'}>
          {Array.from({ length: 2 }).map((_, i) => (
            <SkeletonTextBlock key={i} size='extraLarge' />
          ))}
        </BlockStack>
      ) : (
        <Form onSubmit={handleSubmit}>
          <BlockStack>
            <TextField
              value={formData.email}
              label='Email'
              name='email'
              id='email'
              onChange={(value) => handleInputChange('email', value)}
              error={formErrors.email}
              required
            />
            <TextField
              value={formData.phone}
              label='Phone Number'
              name='phone'
              onChange={(value) => handleInputChange('phone', value)}
              id='phone'
              error={formErrors.phone}
              required
            />
            <Checkbox
              id='updateDefaultCheckbox'
              name='updateDefaultCheckbox'
              checked={updateDefaultProfile}
              onChange={handleCheckboxChange}
              accessibilityLabel='Toggle to update your default profile'>
              Update profile
            </Checkbox>
            {/* Conditional Success and Error Banners */}
            {submitSuccess && (
              <Banner
                status='success'
                title='Your contact information has been successfully updated!'
              />
            )}
            {submitError && <Banner status='warning' title={submitError} />}
            <Button accessibilityRole='submit'>
              {isSubmitting ? <Spinner appearance='subdued' /> : buttonText}
            </Button>
          </BlockStack>
        </Form>
      )}
    </View>
  )
}

const ContactCustomerSupport = ({
  optionName,
  defaultData,
  isLoading,
  shopUrl,
  order_id,
  orderName
}) => {
  const { ui } = useApi()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [buttonText, setButtonText] = useState('Send message')
  const [formErrors, setFormErrors] = useState({})

  const contactReason =
    defaultData?.data?.support_reason_list?.reasons?.map((item) => ({
      value: item.title,
      label: item.title
    })) || []

  const [formData, setFormData] = useState({
    support_reason: contactReason[0]?.value || '',
    reasonDescription: '',
    fulfillment_id: '',
    order_name: '',
    order_id: '',
    shop_url: '',
    email: '',
    phone: ''
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.support_reason)
      errors.support_reason = 'Support reason is required.'
    if (!formData.reasonDescription)
      errors.reasonDescription = 'Description is required.'

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    try {
      const response = await fetch(
        'https://order-editing-staging.cleversity.com/api/storefront/contact_customer_support',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        }
      )

      if (response.ok) {
        setSubmitSuccess(true)
        setButtonText('Message sent')
        ui.forceDataRefresh('Message sent successfully!')
      } else {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to send the message.')
      }
    } catch (error) {
      setSubmitError(
        error.message || 'An error occurred while sending the message.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (!isLoading) {
      setFormData({
        support_reason: contactReason[0]?.value || '',
        reasonDescription: '',
        fulfillment_id:
          defaultData?.data?.fufillmentOrder?.edges[0]?.node?.id || '',
        order_name: orderName,
        order_id: order_id,
        shop_url: shopUrl,
        email: defaultData?.data?.customer?.email || '',
        phone: defaultData?.data?.customer?.phone || ''
      })
    }
  }, [defaultData, isLoading])

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      {isLoading ? (
        <BlockStack spacing='base'>
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonTextBlock key={i} size='extraLarge' />
          ))}
        </BlockStack>
      ) : (
        <Form onSubmit={handleSubmit}>
          <BlockStack>
            <TextField
              value={formData.email}
              label='Email'
              name='email'
              id='email'
              onChange={(value) => handleInputChange('email', value)}
              error={formErrors.email}
              required
            />
            <TextField
              value={formData.phone}
              label='Phone Number'
              name='phone'
              onChange={(value) => handleInputChange('phone', value)}
              id='phone'
              error={formErrors.phone}
              required
            />
            <Select
              label='Support Reason'
              value={formData.support_reason}
              options={contactReason}
              onChange={(value) => handleInputChange('support_reason', value)}
              error={formErrors.support_reason}
              required
            />
            <TextField
              value={formData.reasonDescription}
              label='Description'
              name='reasonDescription'
              id='reasonDescription'
              onChange={(value) =>
                handleInputChange('reasonDescription', value)
              }
              error={formErrors.reasonDescription}
              required
              multiline='5'
            />

            {submitSuccess && (
              <Banner
                status='success'
                title='Your message has been successfully sent!'
              />
            )}
            {submitError && <Banner status='warning' title={submitError} />}
            <Button accessibilityRole='submit'>
              {isSubmitting ? <Spinner appearance='subdued' /> : buttonText}
            </Button>
          </BlockStack>
        </Form>
      )}
    </View>
  )
}

const ChangeProductQuantities = ({
  optionName,
  defaultData,
  isLoading,
  order_id,
  shopUrl
}) => {
  const { ui } = useApi()
  const [loadMore, setLoadMore] = useState(4)
  const [buttonText, setButtonText] = useState('Save')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [quantities, setQuantities] = useState({})
  const [removing, setRemoving] = useState({}) // Track removing state per product

  const handleViewMore = () => {
    setLoadMore((prevCount) => prevCount + 4)
  }

  const handleQuantityChange = (lineItemId, value) => {
    setQuantities((prev) => ({
      ...prev,
      [lineItemId]: value
    }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError('')
    setSuccess('')

    try {
      const promises = Object.entries(quantities).map(
        async ([lineItemId, quantity]) => {
          const payload = {
            order_id,
            shop_url: shopUrl,
            line_item_id: lineItemId,
            quantity
          }

          const response = await fetch(
            'https://order-editing-staging.cleversity.com/api/storefront/change-product-quantities',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            }
          )

          if (!response.ok) {
            const errorData = await response.json()
            throw new Error(
              errorData.message || 'Failed to update product quantity.'
            )
          }
        }
      )

      await Promise.all(promises)
      setSuccess('Product quantities updated successfully.')
      setButtonText('Saved')
      ui.forceDataRefresh('Quantity change successfully!')
    } catch (err) {
      setError(err.message || 'An error occurred while updating quantities.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRemoveProduct = async (lineItemId) => {
    setRemoving((prev) => ({ ...prev, [lineItemId]: true }))
    setError('')
    setSuccess('')

    try {
      const payload = {
        order_id,
        shop_url: shopUrl,
        line_item_id: lineItemId
      }

      const response = await fetch(
        'https://order-editing-staging.cleversity.com/api/storefront/remove-product',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to remove product.')
      }

      setSuccess('Product removed successfully.')
      ui.forceDataRefresh('Product removed successfully!')
    } catch (err) {
      setError(err.message || 'An error occurred while removing the product.')
    } finally {
      setRemoving((prev) => ({ ...prev, [lineItemId]: false }))
    }
  }

  const productsToShow = defaultData?.data?.product?.edges
    .filter((item) => item?.node?.currentQuantity > 0) // Filter products with quantity > 0
    .slice(0, loadMore)

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      {isLoading ? (
        <BlockStack spacing='base'>
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonTextBlock key={i} size='extraLarge' />
          ))}
        </BlockStack>
      ) : (
        <BlockStack>
          {productsToShow?.map((item) => (
            <InlineLayout
              key={item.node?.id}
              blockAlignment='center'
              spacing='base'
              columns={['fill', '30%']}>
              <InlineLayout columns={['auto', 'fill']} spacing='base'>
                <ProductThumbnail
                  size='base'
                  source={item?.node?.image?.url}
                  badge={item?.node?.currentQuantity}
                />
                <BlockStack spacing='none'>
                  <Text size='base' emphasis='bold'>
                    {item?.node?.title}
                  </Text>
                  <Text size='small'>{item?.node?.variantTitle}</Text>
                  <Text>
                    Price:{' '}
                    {formatCurrency(
                      item?.node?.discountedUnitPriceAfterAllDiscountsSet
                        ?.shopMoney?.currencyCode,
                      item?.node?.discountedUnitPriceAfterAllDiscountsSet
                        ?.shopMoney?.amount
                    )}
                  </Text>
                </BlockStack>
              </InlineLayout>

              <BlockStack inlineAlignment='end'>
                <Stepper
                  label='Quantity'
                  value={quantities[item.node.id] || item.node?.currentQuantity}
                  min={1}
                  onChange={(value) =>
                    handleQuantityChange(item.node.id, value)
                  }
                />
                <Link
                  onPress={() => handleRemoveProduct(item.node.id)}
                  disabled={removing[item.node.id]}>
                  {removing[item.node.id] ? (
                    <Spinner appearance='subdued' />
                  ) : (
                    'Remove'
                  )}
                </Link>
              </BlockStack>
            </InlineLayout>
          ))}

          <InlineStack spacing='extraTight' blockAlignment='center'>
            <Icon size='small' source='info' appearance='subdued' />
            <Text size='small'>Taxes and shipping update automatically.</Text>
          </InlineStack>
          {loadMore < defaultData?.data?.product?.edges.length && (
            <Link onPress={handleViewMore}>View more products</Link>
          )}
          <Button kind='primary' onPress={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? <Spinner appearance='subdued' /> : buttonText}
          </Button>
          {/* Error Banner */}
          {error && (
            <Banner status='critical' onDismiss={() => setError('')}>
              <Text>{error}</Text>
            </Banner>
          )}
          {/* Success Banner */}
          {success && (
            <Banner status='success' onDismiss={() => setSuccess('')}>
              <Text>{success}</Text>
            </Banner>
          )}
        </BlockStack>
      )}
    </View>
  )
}

const UpgradeShippingMethod = ({ optionName, defaultData }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [shippingMethod, setShippingMethod] = useState([
    {
      name: 'Standard'
    },
    {
      name: 'Economy'
    }
  ])
  const [selectedMethod, setSelectedMethod] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Update Shipping Method')
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [redirectUrl, setRedirectUrl] = useState(null)

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      <BlockStack>
        <ChoiceList
          name='group-single'
          variant='group'
          value={selectedMethod?.name || ''}>
          {shippingMethod?.map((item, index) => (
            <Choice
              key={index}
              id={item.name}
              value={item?.name}
              secondaryContent={`USD`}>
              {item.name}
            </Choice>
          ))}
        </ChoiceList>
        <Button kind='primary'>
          {isSubmitting ? <Spinner appearance='subdued' /> : buttonText}
        </Button>

        {submitSuccess && (
          <Banner
            status='success'
            title='Shipping method updated successfully!'>
            {redirectUrl && (
              <BlockStack inlineAlignment='center'>
                <Link to={redirectUrl}>
                  Click here to complete the draft order.
                </Link>
              </BlockStack>
            )}
          </Banner>
        )}
        {submitError && <Banner status='critical' title={submitError} />}
        {error && <Banner status='critical' title={`Error: ${error}`} />}
        <InlineLayout
          padding={'base'}
          background={'subdued'}
          spacing={'base'}
          columns={['auto', 'fill']}
          blockAlignment='center'>
          <Icon source='info' />
          <Text>
            When you change the shipping method, your existing order will be
            canceled, and a draft order will be created to apply this change. To
            see the updated shipping method in your order, you must complete the
            checkout process in the storefront.
          </Text>
        </InlineLayout>
      </BlockStack>
    </View>
  )
}

const CancelOrder = ({
  optionName,
  defaultData,
  isLoading,
  shopUrl,
  order_id,
  orderName
}) => {
  const { ui } = useApi()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Cancel Order')
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [formErrors, setFormErrors] = useState({})

  const cancelReason =
    defaultData?.data?.cancel_reason_list?.returnReasons?.map((item) => ({
      value: item.title,
      label: item.title
    })) || []

  const [formData, setFormData] = useState({
    cancelReason: cancelReason[0]?.value || '',
    reasonDescription: '',
    fulfillment_id: '',
    order_name: '',
    order_id: '',
    shop_url: ''
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.cancelReason)
      errors.cancelReason = 'Cancel reason is required.'
    if (!formData.reasonDescription)
      errors.reasonDescription = 'Description is required.'

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    try {
      const response = await fetch(
        'https://order-editing-staging.cleversity.com/api/storefront/request_order_cancel',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        }
      )

      if (response.ok) {
        setSubmitSuccess(true)
        setButtonText('Order Canceled')
        ui.forceDataRefresh('Sent Order cancele request successfully!')
      } else {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to cancel the order.')
      }
    } catch (error) {
      setSubmitError(
        error.message || 'An error occurred while canceling the order.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (!isLoading) {
      setFormData({
        cancelReason: cancelReason[0]?.value || '',
        reasonDescription: '',
        fulfillment_id:
          defaultData?.data?.fufillmentOrder?.edges[0]?.node?.id || '',
        order_name: orderName,
        order_id: order_id,
        shop_url: shopUrl
      })
    }
  }, [defaultData, isLoading])

  return (
    <View id={optionName} padding={['none', 'base', 'base', 'base']}>
      <BlockStack>
        {isLoading ? (
          <BlockStack spacing='base'>
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonTextBlock key={i} size='extraLarge' />
            ))}
          </BlockStack>
        ) : (
          <Form onSubmit={handleSubmit}>
            <BlockStack>
              <Select
                label='Select Cancel Reason'
                value={formData.cancelReason}
                options={cancelReason}
                onChange={(value) => handleInputChange('cancelReason', value)}
                error={formErrors.cancelReason}
                required
              />

              <TextField
                value={formData.reasonDescription}
                label='Why do you want to cancel your order?'
                multiline='5'
                onChange={(value) =>
                  handleInputChange('reasonDescription', value)
                }
                error={formErrors.reasonDescription}
                required
              />
              <Text size='small' appearance='subdued'>
                You'll be contacted by the customer support team to confirm the
                cancellation.
              </Text>
              <Button kind='primary' accessibilityRole='submit'>
                {isSubmitting ? <Spinner appearance='subdued' /> : buttonText}
              </Button>
              {submitError && (
                <Banner status='critical' title={`Error: ${submitError}`} />
              )}
              {submitSuccess && (
                <Banner
                  status='success'
                  title='Order canceled and refunded successfully!'
                />
              )}
            </BlockStack>
          </Form>
        )}
      </BlockStack>
    </View>
  )
}

const ChangePaymentMethod = ({ optionName, defaultData }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [buttonText, setButtonText] = useState('Change Payment Method')
  const [redirectUrl, setRedirectUrl] = useState(null)

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      <BlockStack>
        <InlineLayout
          padding={'base'}
          background={'subdued'}
          spacing={'base'}
          columns={['auto', 'fill']}
          blockAlignment='center'>
          <Icon source='info' />
          <Text>
            When you change your payment method, your existing order will be
            canceled, and a draft order will be created to apply this change. To
            see the updated payment method in your order, you must complete the
            checkout process.
          </Text>
        </InlineLayout>

        <Button kind='primary' disabled={isSubmitting}>
          {isSubmitting ? <Spinner appearance='subdued' /> : buttonText}
        </Button>

        {submitError && (
          <Banner status='critical' title={`Error: ${submitError}`} />
        )}
        {submitSuccess && (
          <Banner
            status='success'
            title='Payment method changed successfully!'
          />
        )}
        {redirectUrl && (
          <BlockStack inlineAlignment='center'>
            <Link to={redirectUrl}>
              Click here to continue the order process
            </Link>
          </BlockStack>
        )}
      </BlockStack>
    </View>
  )
}

const EditGiftMessage = ({
  optionName,
  defaultData,
  isLoading,
  shopUrl,
  order_id
}) => {
  const { ui } = useApi()
  const [giftMessage, setGiftMessage] = useState({ gift_message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [buttonText, setButtonText] = useState('Save Message')

  const handleGiftMessageChange = (value) => {
    setGiftMessage((prev) => ({ ...prev, gift_message: value }))
  }

  // Submit the gift message
  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    const payload = {
      gift_message: giftMessage.gift_message,
      order_id: order_id,
      shop_url: shopUrl
    }

    try {
      const response = await fetch(
        'https://order-editing-staging.cleversity.com/api/storefront/edit_gift_message',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )

      if (response.ok) {
        setSubmitSuccess(true)
        setButtonText('Message Saved')
        ui.forceDataRefresh('Gift message updated successfully!')
      } else {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to save the gift message.')
      }
    } catch (error) {
      setSubmitError(
        error.message || 'An error occurred while saving the gift message.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  // Initialize gift message from default data
  useEffect(() => {
    if (!isLoading && defaultData?.data?.gift_note) {
      const giftMessageValue = defaultData.data.gift_note.find(
        (note) => note?.key === 'Gift Message'
      )?.value

      setGiftMessage({ gift_message: giftMessageValue || '' })
    }
  }, [isLoading, defaultData])

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      {isLoading ? (
        <BlockStack spacing='base'>
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonTextBlock key={i} size='extraLarge' />
          ))}
        </BlockStack>
      ) : (
        <Form onSubmit={handleSubmit}>
          <BlockStack>
            <TextField
              label='Type your message'
              multiline={3}
              value={giftMessage?.gift_message}
              onChange={(value) => handleGiftMessageChange(value)}
            />

            <Button kind='primary' accessibilityRole='submit'>
              {isSubmitting ? <Spinner appearance='subdued' /> : buttonText}
            </Button>

            {submitError && <Banner status='critical' title={submitError} />}
            {submitSuccess && (
              <Banner
                status='success'
                title='Gift message saved successfully!'
              />
            )}
          </BlockStack>
        </Form>
      )}
    </View>
  )
}

const DownloadInvoice = ({
  optionName,
  defaultData,
  isLoading,
  order_id,
  shopUrl
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [actionType, setActionType] = useState('download')
  const [email, setEmail] = useState({
    customerEmail: ''
  })
  const [isBusiness, setIsBusiness] = useState(false)
  const [updateBilling, setUpdateBilling] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('US')
  const [taxIdOptions, setTaxIdOptions] = useState([])
  const [businessData, setBusinessData] = useState({
    company_name: '',
    company_country: '',
    company_tax_id: '',
    company_tax_number: ''
  })
  const [billingData, setBillingData] = useState({
    billing_country: '',
    billing_address: '',
    billing_apartment_etc: '',
    billing_provinces: '',
    billing_city: '',
    billing_postal_code: ''
  })

  useEffect(() => {
    if (selectedCountry && countryTaxIds[selectedCountry]) {
      setTaxIdOptions(countryTaxIds[selectedCountry].taxIds)
    } else {
      setTaxIdOptions([])
    }
  }, [selectedCountry])

  useEffect(() => {
    if (!isLoading) {
      setBillingData({
        billing_country: defaultData?.data?.billing_address?.countryCodeV2,
        billing_address: defaultData?.data?.billing_address?.address1,
        billing_apartment_etc: defaultData?.data?.billing_address?.address2,
        billing_provinces: defaultData?.data?.billing_address?.provinceCode,
        billing_city: defaultData?.data?.billing_address?.city,
        billing_postal_code: defaultData?.data?.billing_address?.zip
      })

      setEmail({
        customerEmail: defaultData?.data?.customer?.email
      })
    }
  }, [isLoading, defaultData])
  console.log(defaultData?.data?.customer?.email)
  const handleInputChange = (setter) => (value) => setter(value)
  const handleBusinessInputChange = (field) => (value) =>
    setBusinessData((prev) => ({ ...prev, [field]: value }))
  const handleBillingInputChange = (field) => (value) =>
    setBillingData((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError(null)
    setSuccess(false)

    const payload = {
      order_id: order_id,
      shop_url: shopUrl,
      email: actionType === 'email' ? email : undefined,
      type: actionType,
      ...(isBusiness ? businessData : {}),
      ...(updateBilling ? billingData : {})
    }

    try {
      const response = await fetch(
        'https://order-editing-staging.cleversity.com/api/storefront/send-download-invoice',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
      )

      if (!response.ok) {
        throw new Error('Failed to process the request.')
      }

      setSuccess(true)
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderAddressSection = (type, address) => (
    <BlockStack spacing='tight'>
      <Text appearance='subdued'>{`${type} Address`}</Text>
      <BlockStack spacing='0'>
        <Text>{address?.name || 'N/A'}</Text>
        <Text>
          {address?.address1 || 'N/A'}
          {address?.address2 ? `, ${address?.address2}` : ''}
        </Text>
        <Text>
          {address?.city || 'N/A'} {address?.zip || 'N/A'},{' '}
          {address?.countryCodeV2 || 'N/A'}
        </Text>
      </BlockStack>
    </BlockStack>
  )

  const renderInvoiceOptions = () => (
    <ChoiceList
      name='group-single'
      variant='group'
      value={actionType}
      onChange={handleInputChange(setActionType)}>
      <Choice id='send_invoice'>Send invoice by email</Choice>
      {actionType === 'send_invoice' && (
        <BlockStack
          spacing={0}
          padding='base'
          border={['none', 'base', 'none', 'base']}
          background='subdued'
          borderWidth='base'>
          <TextField
            label='Email'
            value={email?.customerEmail}
            onChange={handleInputChange(setEmail)}
          />
        </BlockStack>
      )}
      <Choice id='download_invoice'>Download Invoice</Choice>
    </ChoiceList>
  )

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      {isLoading ? (
        <BlockStack spacing='base'>
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonTextBlock key={i} size='extraLarge' />
          ))}
        </BlockStack>
      ) : (
        <Form onSubmit={handleSubmit}>
          <BlockStack>
            <InlineLayout columns={['fill', 'fill']}>
              {renderAddressSection(
                'Shipping',
                defaultData?.data?.shipping_address
              )}
              {renderAddressSection(
                'Billing',
                defaultData?.data?.billing_address
              )}
            </InlineLayout>

            <Text appearance='subdued'>Customize your invoice</Text>

            <Checkbox
              id='checkbox-business'
              name='checkbox-business'
              checked={isBusiness}
              onChange={handleInputChange(setIsBusiness)}
              accessibilityLabel='Enable business purchase options'>
              Purchasing as a business
            </Checkbox>
            {isBusiness && (
              <BlockStack>
                <TextField
                  label='Company Name'
                  value={businessData.company_name || ''}
                  onChange={(value) =>
                    handleBusinessInputChange('company_name')(value)
                  }
                />
                <Select
                  required
                  label='Country/Region'
                  options={taxIdCountries}
                  value={selectedCountry}
                  onChange={(value) => {
                    setSelectedCountry(value)
                    handleBusinessInputChange('company_country')(value)
                  }}
                />
                <Select
                  required
                  label='Tax ID'
                  options={[
                    { label: 'Select Tax ID', value: '' },
                    ...taxIdOptions
                  ]}
                  value={businessData.company_tax_id || ''}
                  onChange={(value) =>
                    handleBusinessInputChange('company_tax_id')(value)
                  }
                />
                <TextField
                  label='Tax Number'
                  value={businessData.company_tax_number || ''}
                  onChange={(value) =>
                    handleBusinessInputChange('company_tax_number')(value)
                  }
                />
              </BlockStack>
            )}

            <Checkbox
              id='checkbox-billing'
              name='checkbox-billing'
              checked={updateBilling}
              onChange={handleInputChange(setUpdateBilling)}
              accessibilityLabel='Enable custom billing details'>
              Update invoice billing details
            </Checkbox>
            {updateBilling && (
              <BlockStack>
                <Select
                  required
                  label='Country/Region'
                  value={billingData.billing_country || ''}
                  options={countries}
                  onChange={(value) =>
                    handleBillingInputChange('billing_country')(value)
                  }
                />
                <TextField
                  label='Address'
                  value={billingData.billing_address || ''}
                  onChange={(value) =>
                    handleBillingInputChange('billing_address')(value)
                  }
                />
                <TextField
                  label='Apartment, suite, etc. (Optional)'
                  value={billingData.billing_apartment_etc || ''}
                  onChange={(value) =>
                    handleBillingInputChange('billing_apartment_etc')(value)
                  }
                />
                {billingData.billing_country === 'US' && (
                  <Select
                    required
                    label='Provinces'
                    value={billingData.billing_provinces || ''}
                    options={provinces}
                    onChange={(value) =>
                      handleBillingInputChange('billing_provinces')(value)
                    }
                  />
                )}

                <InlineLayout columns={['fill', 'fill']} spacing='base'>
                  <TextField
                    label='City'
                    value={billingData.billing_city || ''}
                    onChange={(value) =>
                      handleBillingInputChange('billing_city')(value)
                    }
                  />
                  <TextField
                    label='Postal Code'
                    value={billingData.billing_postal_code || ''}
                    onChange={(value) =>
                      handleBillingInputChange('billing_postal_code')(value)
                    }
                  />
                </InlineLayout>
              </BlockStack>
            )}

            {renderInvoiceOptions()}

            <Button
              kind='primary'
              disabled={isSubmitting}
              accessibilityRole='submit'>
              {isSubmitting ? (
                <Spinner appearance='subdued' />
              ) : (
                'Generate Invoice'
              )}
            </Button>

            {success && (
              <Banner
                status='success'
                title='Invoice processed successfully!'
              />
            )}
            {error && <Banner status='critical' title={`Error: ${error}`} />}
          </BlockStack>
        </Form>
      )}
    </View>
  )
}

const AddAnotherProduct = ({
  optionName,
  defaultData,
  isLoading,
  handleDefaultData
}) => {
  const [loadMore, setLoadMore] = useState(4)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [error, setError] = useState(null)
  const [buttonText, setButtonText] = useState('Save')
  const [selectedImageSource, setSelectedImageSource] = useState(
    'https://cdn.shopify.com/s/files/1/0711/2173/1816/files/44694ee386818f3276566210464cf341.jpg?v=1731948240'
  )

  const handleViewMore = () => {
    setLoadMore((prevCount) => prevCount + 4) // Show 4 more products on each click
  }
  const products = [
    {
      id: '123',
      image:
        'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
      title: 'The Collection Snowboard: Hydrogen',
      variant: {
        title: 'medium / black / large',
        price: '200'
      }
    },
    {
      id: '124',
      image:
        'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
      title: 'The Collection Snowboard: Hydrogen',
      variant: {
        title: 'medium / black / large',
        price: '200'
      }
    },
    {
      id: '125',
      image:
        'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
      title: 'The Collection Snowboard: Hydrogen',
      variant: {
        title: 'medium / black / large',
        price: '200',
        discountPrice: '150'
      }
    }
  ]

  const productsToShow = defaultData?.products?.slice(0, loadMore)

  const handleImageChange = (newSource) => {
    setSelectedImageSource(newSource) // Update the selected image source
  }

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      {isLoading ? (
        <BlockStack spacing={'base'}>
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonTextBlock key={i} size='extraLarge' />
          ))}
        </BlockStack>
      ) : (
        <BlockStack>
          <BlockStack spacing='loose'>
            <TextField label='Search product' />

            {error && <Banner status='critical' title={error} />}
            {productsToShow?.map((product) => (
              <InlineLayout
                key={product?.id}
                blockAlignment='center'
                spacing='extraTight'
                columns={['fill', 'auto']}>
                <InlineStack blockAlignment='center' spacing='extraTight'>
                  <ProductThumbnail
                    size='base'
                    source={product?.featuredMedia?.preview?.image?.url}
                  />
                  <BlockStack spacing='extraTight'>
                    <Heading level='3'>{product?.title}</Heading>
                    <Text size='small'>
                      {product?.priceRangeV2?.maxVariantPrice?.amount ===
                      product?.priceRangeV2?.minVariantPrice?.amount
                        ? formatCurrency(
                            product?.priceRangeV2?.minVariantPrice
                              ?.currencyCode,
                            product?.priceRangeV2?.minVariantPrice?.amount
                          )
                        : `Start from ${formatCurrency(
                            product?.priceRangeV2?.minVariantPrice
                              ?.currencyCode,
                            product?.priceRangeV2?.minVariantPrice?.amount
                          )}`}
                    </Text>
                  </BlockStack>
                </InlineStack>
                <Button
                  overlay={
                    <Modal padding size='large' id='my-modal'>
                      <InlineLayout columns={['fill', 'fill']} spacing='base'>
                        <BlockStack>
                          <Image source={selectedImageSource} />
                          <InlineLayout spacing='tight'>
                            <Pressable
                              onPress={() =>
                                handleImageChange(
                                  'https://cdn.shopify.com/s/files/1/0711/2173/1816/files/44694ee386818f3276566210464cf341.jpg?v=1731948240'
                                )
                              }>
                              <Image
                                cornerRadius='base'
                                border='base'
                                source='https://cdn.shopify.com/s/files/1/0711/2173/1816/files/44694ee386818f3276566210464cf341.jpg?v=1731948240'
                              />
                            </Pressable>
                            <Pressable
                              onPress={() =>
                                handleImageChange(
                                  'https://shopninja-optimarko.myshopify.com/cdn/shop/files/6eb0aa9fdb271e5954b2f0d09a0640e4.jpg?v=1731948241&width=823'
                                )
                              }>
                              <Image
                                cornerRadius='base'
                                border='base'
                                source='https://shopninja-optimarko.myshopify.com/cdn/shop/files/6eb0aa9fdb271e5954b2f0d09a0640e4.jpg?v=1731948241&width=823'
                              />
                            </Pressable>
                            <Pressable
                              onPress={() =>
                                handleImageChange(
                                  'https://shopninja-optimarko.myshopify.com/cdn/shop/files/015219de8a5be46a3b0a7b9089112d74.jpg?v=1731948241&width=823'
                                )
                              }>
                              <Image
                                cornerRadius='base'
                                border='base'
                                source='https://shopninja-optimarko.myshopify.com/cdn/shop/files/015219de8a5be46a3b0a7b9089112d74.jpg?v=1731948241&width=823'
                              />
                            </Pressable>
                            <Pressable
                              onPress={() =>
                                handleImageChange(
                                  'https://shopninja-optimarko.myshopify.com/cdn/shop/files/e8490702c423e6c62d356cace500822f.jpg?v=1731948241&width=823'
                                )
                              }>
                              <Image
                                cornerRadius='base'
                                border='base'
                                source='https://shopninja-optimarko.myshopify.com/cdn/shop/files/e8490702c423e6c62d356cace500822f.jpg?v=1731948241&width=823'
                              />
                            </Pressable>
                          </InlineLayout>
                        </BlockStack>

                        <BlockStack>
                          <BlockStack spacing='base'>
                            <Heading level='1'>
                              Selling Plans Ski Wax Selling Plans Ski Wax
                              Selling Plans Ski Wax
                            </Heading>
                            <InlineStack>
                              <Text size='medium' accessibilityRole='deletion'>
                                $9.95
                              </Text>
                              <Text size='medium' appearance='critical'>
                                $8.96
                              </Text>
                            </InlineStack>
                            <BlockStack spacing='0'>
                              <Text>Size</Text>
                              <Select
                                label='Select size'
                                value='2'
                                options={[
                                  {
                                    value: '1',
                                    label: '1'
                                  },
                                  {
                                    value: '2',
                                    label: '2'
                                  },
                                  {
                                    value: '3',
                                    label: '3'
                                  },
                                  {
                                    value: '4',
                                    label: '4'
                                  },
                                  {
                                    value: '5',
                                    label: '5'
                                  },
                                  {
                                    value: '6',
                                    label: '6'
                                  }
                                ]}
                              />
                            </BlockStack>
                            <BlockStack spacing='0'>
                              <Text>Color</Text>
                              <Select
                                label='Select Color'
                                value='2'
                                options={[
                                  {
                                    value: '1',
                                    label: 'Black'
                                  },
                                  {
                                    value: '2',
                                    label: 'Red'
                                  },
                                  {
                                    value: '3',
                                    label: 'Yellow'
                                  },
                                  {
                                    value: '4',
                                    label: 'Purple'
                                  }
                                ]}
                              />
                            </BlockStack>
                          </BlockStack>
                          <BlockStack>
                            <Stepper label='Quantity' value={1} />
                            <Button
                              onPress={() => {
                                console.log('onPress event')
                              }}>
                              Add to cart
                            </Button>
                          </BlockStack>
                        </BlockStack>
                      </InlineLayout>
                    </Modal>
                  }>
                  View
                </Button>
              </InlineLayout>
            ))}
          </BlockStack>

          <Link onPress={handleViewMore}>View more products</Link>

          <Button kind='primary' disabled={isSubmitting}>
            {isSubmitting ? <Spinner appearance='subdued' /> : buttonText}
          </Button>

          {submitError && <Banner status='critical' title={submitError} />}
          {submitSuccess && (
            <Banner status='success' title='Products added successfully!' />
          )}
        </BlockStack>
      )}
    </View>
  )
}

const ChangeProductSizeAndVariant = ({
  optionName,
  defaultData,
  isLoading,
  order_id,
  shopUrl
}) => {
  const { ui } = useApi()
  const [loadMore, setLoadMore] = useState(4)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Save')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [selectedVariants, setSelectedVariants] = useState({}) // Track selected variants

  const handleViewMore = () => {
    setLoadMore((prevCount) => prevCount + 4)
  }

  const handleVariantChange = (lineItemId, variantId) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [lineItemId]: variantId
    }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError('')
    setSuccess('')

    try {
      const promises = Object.entries(selectedVariants).map(
        async ([lineItemId, variantId]) => {
          // Find the product details to get the current quantity
          const product = defaultData?.data?.product?.edges.find(
            (item) => item.node.id === lineItemId
          )
          const quantity = product?.node?.currentQuantity || 1

          const payload = {
            order_id,
            shop_url: shopUrl,
            variant_id: variantId,
            quantity,
            line_item_id: lineItemId
          }

          const response = await fetch(
            'https://order-editing-staging.cleversity.com/api/storefront/change-size-variant',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            }
          )

          if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.message || 'Failed to update variant.')
          }
        }
      )

      await Promise.all(promises)
      setSuccess('Variants updated successfully.')
      setButtonText('Saved')
      ui.forceDataRefresh('Product variant changed successfully!')
    } catch (err) {
      setError(err.message || 'An error occurred while updating variants.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const productsToShow = defaultData?.data?.product?.edges
    .filter((item) => item?.node?.currentQuantity > 0) // Filter products with quantity > 0
    .slice(0, loadMore)

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      {isLoading ? (
        <BlockStack spacing={'base'}>
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonTextBlock key={i} size='extraLarge' />
          ))}
        </BlockStack>
      ) : (
        <BlockStack>
          {productsToShow?.map((item) => {
            const currentVariantId = item?.node?.variant?.id

            // Filter out the product's current variant
            const variantOptions = item?.node?.product?.variants?.edges
              ?.filter((variant) => variant?.node?.id !== currentVariantId)
              .map((variant) => ({
                value: variant?.node?.id || '',
                label: variant?.node?.title
              }))

            return (
              <InlineLayout
                key={item?.node?.id}
                blockAlignment='center'
                spacing='base'
                columns={['fill', '35%']}>
                <InlineLayout columns={['auto', 'fill']} spacing={'base'}>
                  <ProductThumbnail
                    size='base'
                    source={item?.node?.image?.url}
                    badge={item?.node?.currentQuantity}
                  />
                  <BlockStack spacing={'none'}>
                    <Text size='base'>{item?.node?.title}</Text>
                    <Text size='small'>{item?.node?.variantTitle}</Text>
                    <Text>
                      Price:{' '}
                      {formatCurrency(
                        item?.node?.discountedUnitPriceAfterAllDiscountsSet
                          ?.shopMoney?.currencyCode,
                        item?.node?.discountedUnitPriceAfterAllDiscountsSet
                          ?.shopMoney?.amount
                      )}
                    </Text>
                  </BlockStack>
                </InlineLayout>
                <Select
                  label='Size/Variant'
                  value={selectedVariants[item.node.id] || currentVariantId}
                  options={variantOptions} // Use filtered options here
                  onChange={(value) => handleVariantChange(item.node.id, value)}
                />
              </InlineLayout>
            )
          })}

          {loadMore < defaultData?.data?.product?.edges.length && (
            <Link onPress={handleViewMore}>View more products</Link>
          )}

          {/* Save button */}
          <Button
            kind='primary'
            onPress={handleSubmit}
            disabled={
              isSubmitting || Object.keys(selectedVariants).length === 0
            }>
            {isSubmitting ? <Spinner appearance='subdued' /> : buttonText}
          </Button>
          {success && (
            <Banner status='success' onDismiss={() => setSuccess('')}>
              {success}
            </Banner>
          )}
          {error && (
            <Banner status='critical' onDismiss={() => setError('')}>
              {error}
            </Banner>
          )}
        </BlockStack>
      )}
    </View>
  )
}

const SwitchProduct = ({
  optionName,
  defaultData,
  isLoading,
  order_id,
  shopUrl
}) => {
  const { ui } = useApi()
  const [loadMore, setLoadMore] = useState(4)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [addToCartButtonText, setAddToCartButtonText] = useState('Add to cart')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [selectedImageSource, setSelectedImageSource] = useState()
  const [selectedVariant, setSelectedVariant] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isProductLoading, setIsProductLoading] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [allProductData, setAllProductData] = useState([])
  const [singleProduct, setSingleProduct] = useState({})
  const [quantity, setQuantity] = useState(1)

  const deduplicateProducts = (products) => {
    const seen = new Set()
    return products.filter((product) => {
      if (seen.has(product.id)) {
        return false
      }
      seen.add(product.id)
      return true
    })
  }
  // Only derive singleProductVariant when singleProduct is defined and has variants
  const singleProductVariant =
    singleProduct?.variants?.nodes?.map((variant) => ({
      value: variant.id,
      label: variant.title
    })) || []

  const handleViewMore = () => {
    setLoadMore((prevCount) => prevCount + 4)
  }
  const [isProductSelect, setIsProductSelect] = useState(false)
  const handleImageChange = (newSource) => {
    setSelectedImageSource(newSource)
  }

  const handleSinlgeProductClick = (product) => {
    setIsProductSelect(true)
    setSingleProduct(product)
  }

  const handleBack = () => {
    setIsProductSelect(false)
  }

  const productsToShow = defaultData?.data?.product?.edges
    .filter((item) => item?.node?.currentQuantity > 0)
    .slice(0, loadMore)

  // Function to handle selecting or deselecting a product to switch
  const handleProductSelect = (product) => {
    if (selectedProduct?.id === product?.id) {
      setSelectedProduct(null)
    } else {
      setSelectedProduct(product)
    }
  }

  const handleAddToCart = async () => {
    if (!selectedProduct || !selectedVariant) return

    setIsSubmitting(true)

    const payload = {
      order_id: order_id,
      shop_url: shopUrl,
      variant_id: selectedVariant,
      quantity: quantity,
      line_item_id: selectedProduct?.id
    }

    try {
      const response = await fetch(
        'https://order-editing-staging.cleversity.com/api/storefront/switch-product',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()

      // Handle the success response
      setSuccess('Product added to cart successfully!')
      setAddToCartButtonText('Added')
      ui.forceDataRefresh('Product switch has been successfully!')
    } catch (err) {
      setError('Failed to add product to cart. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleVariantSelect = (variantId) => {
    setSelectedVariant(variantId)
  }

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity)
  }

  const getAllProduct = async (cursor = null, isLoadMore = false) => {
    if (isLoadMore) {
      setIsLoadingMore(true)
    } else {
      setIsProductLoading(true)
    }
    setError('')

    try {
      const response = await fetch(
        `https://order-editing-staging.cleversity.com/api/storefront/get-all-product?cursor=${
          cursor || ''
        }&limit=6&shop_url=${shopUrl}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()

      // Deduplicate products before updating state
      setAllProductData((prevState) => ({
        nodes: deduplicateProducts([
          ...(prevState.nodes || []),
          ...(data?.data?.nodes || [])
        ]),
        pageInfo: data?.data?.pageInfo || {}
      }))
    } catch (err) {
      setError(err.message || 'Failed to fetch products.')
    } finally {
      if (isLoadMore) {
        setIsLoadingMore(false)
      } else {
        setIsProductLoading(false) // Reset loading state
      }
    }
  }

  useEffect(() => {
    getAllProduct()
  }, [isLoading])

  useEffect(() => {
    if (singleProduct?.featuredMedia?.preview?.image?.url) {
      setSelectedImageSource(
        `${singleProduct?.featuredMedia?.preview?.image?.url}`
      )
    }

    // Set the default selectedVariant if variants are available
    if (
      singleProduct?.variants?.nodes &&
      singleProduct.variants.nodes.length > 0
    ) {
      setSelectedVariant(singleProduct.variants.nodes[0].id) // Default to first variant
    }
  }, [singleProduct])

  // Function to load more products
  const loadMoreProducts = async () => {
    const nextCursor = allProductData?.pageInfo?.endCursor
    if (allProductData?.pageInfo?.hasNextPage && nextCursor) {
      await getAllProduct(nextCursor, true)
    }
  }

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      {isLoading ? (
        <BlockStack spacing={'base'}>
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonTextBlock key={i} size='extraLarge' />
          ))}
        </BlockStack>
      ) : (
        <BlockStack>
          <BlockStack spacing='loose'>
            <TextField label='Search product' icon={{ source: 'magnify' }} />

            {productsToShow?.map((product) => (
              <InlineLayout
                key={product?.node?.id}
                blockAlignment='center'
                spacing='base'
                columns={['fill', 'auto']}>
                <InlineStack spacing='extraTight'>
                  <ProductThumbnail
                    size='base'
                    source={product?.node?.image?.url}
                  />
                  <BlockStack spacing='none'>
                    <Text size='base'>{product?.node?.title}</Text>
                    <Text size='small'>{product?.node?.variantTitle}</Text>
                    <Text size='small'>
                      Price:{' '}
                      {formatCurrency(
                        product?.node?.discountedUnitPriceAfterAllDiscountsSet
                          ?.shopMoney?.currencyCode,
                        product?.node?.discountedUnitPriceAfterAllDiscountsSet
                          ?.shopMoney?.amount
                      )}
                    </Text>
                  </BlockStack>
                </InlineStack>
                <Button
                  onPress={() => handleProductSelect(product.node)}
                  appearance={'critical'}
                  overlay={
                    <Modal
                      padding
                      size='large'
                      id='my-modal'
                      title='Select a replacement product'>
                      {isProductSelect ? (
                        <InlineLayout columns={['fill', 'fill']} spacing='base'>
                          <BlockStack>
                            <Image
                              loading='eager'
                              source={selectedImageSource}
                            />
                            <InlineStack spacing='tight'>
                              {singleProduct?.media?.nodes?.map(
                                (item, index) => (
                                  <Pressable
                                    key={index}
                                    onPress={() =>
                                      handleImageChange(
                                        `${item?.preview?.image?.url}`
                                      )
                                    }>
                                    <ProductThumbnail
                                      cornerRadius='base'
                                      border='base'
                                      source={item?.preview?.image?.url}
                                    />
                                  </Pressable>
                                )
                              )}
                            </InlineStack>
                          </BlockStack>

                          <BlockStack>
                            <BlockStack spacing='base'>
                              <Heading level='1'>
                                {singleProduct?.title}
                              </Heading>
                              <InlineStack>
                                <Text size='medium' appearance='critical'>
                                  {(() => {
                                    const selectedVariantData =
                                      singleProduct?.variants?.nodes?.find(
                                        (variant) =>
                                          variant.id === selectedVariant
                                      )

                                    if (!selectedVariantData)
                                      return 'Price unavailable'

                                    const priceInfo =
                                      selectedVariantData?.presentmentPrices
                                        ?.nodes[0]?.price
                                    if (!priceInfo) return 'Price unavailable'

                                    const { currencyCode, amount } = priceInfo
                                    return formatCurrency(currencyCode, amount)
                                  })()}
                                </Text>
                              </InlineStack>
                              <Select
                                label='Size/Variant'
                                value={selectedVariant}
                                options={singleProductVariant}
                                onChange={(value) => handleVariantSelect(value)}
                              />
                              <Stepper
                                label='Quantity'
                                value={quantity}
                                min={1}
                                onChange={handleQuantityChange}
                              />
                            </BlockStack>
                            <BlockStack padding='none'>
                              <Button
                                onPress={handleAddToCart}
                                size='small'
                                disabled={isSubmitting}>
                                {isSubmitting ? (
                                  <Spinner />
                                ) : (
                                  addToCartButtonText
                                )}
                              </Button>
                              <Button onPress={handleBack} size='small'>
                                Back
                              </Button>
                            </BlockStack>
                          </BlockStack>
                        </InlineLayout>
                      ) : (
                        <BlockStack>
                          {/* Scrollable Content */}
                          <BlockStack>
                            <TextField
                              label='Search for product'
                              icon={{ source: 'magnify' }}
                            />
                            {isProductLoading ? (
                              <BlockLayout
                                rows={[200]}
                                blockAlignment='center'
                                inlineAlignment='center'>
                                <Spinner />
                              </BlockLayout>
                            ) : (
                              <ScrollView
                                maxBlockSize={500}
                                onScrolledToEdge={({ scrolledTo }) => {
                                  if (scrolledTo.block == 'end') {
                                    loadMoreProducts() // Trigger fetching more products
                                  }
                                }}>
                                <BlockStack overflow='hidden' padding='tight'>
                                  {allProductData?.nodes
                                    ?.filter((product) => !product.isGiftCard)
                                    .map((product) => (
                                      <InlineLayout
                                        key={product.id}
                                        columns={['fill', '30%']}
                                        spacing='base'
                                        padding='base'>
                                        <InlineStack
                                          blockAlignment='center'
                                          spacing='extraTight'>
                                          <ProductThumbnail
                                            size='base'
                                            source={
                                              product?.featuredMedia?.preview
                                                ?.image?.url
                                            }
                                          />
                                          <BlockStack spacing='none'>
                                            <Text size='base'>
                                              {product?.title}
                                            </Text>
                                            <Text size='small'>
                                              {product?.priceRangeV2
                                                ?.maxVariantPrice?.amount ===
                                              product?.priceRangeV2
                                                ?.minVariantPrice?.amount
                                                ? formatCurrency(
                                                    product?.priceRangeV2
                                                      ?.minVariantPrice
                                                      ?.currencyCode,
                                                    product?.priceRangeV2
                                                      ?.minVariantPrice?.amount
                                                  )
                                                : `Start from ${formatCurrency(
                                                    product?.priceRangeV2
                                                      ?.minVariantPrice
                                                      ?.currencyCode,
                                                    product?.priceRangeV2
                                                      ?.minVariantPrice?.amount
                                                  )}`}
                                            </Text>
                                          </BlockStack>
                                        </InlineStack>

                                        <Link
                                          onPress={() =>
                                            handleSinlgeProductClick(product)
                                          }>
                                          View Details
                                        </Link>
                                      </InlineLayout>
                                    ))}
                                </BlockStack>
                                {isLoadingMore && (
                                  <BlockStack spacing={0} padding={'base'}>
                                    {Array.from({ length: 1 }).map((_, i) => (
                                      <SkeletonTextBlock
                                        key={i}
                                        size='extraLarge'
                                      />
                                    ))}
                                  </BlockStack>
                                )}
                              </ScrollView>
                            )}
                          </BlockStack>
                        </BlockStack>
                      )}
                    </Modal>
                  }>
                  Replace
                </Button>
              </InlineLayout>
            ))}
          </BlockStack>
          {loadMore < defaultData?.data?.product?.edges.length && (
            <Link onPress={handleViewMore}>View more products</Link>
          )}

          {success && (
            <Banner status='success' onDismiss={() => setSuccess('')}>
              {success}
            </Banner>
          )}
          {error && (
            <Banner status='error' onDismiss={() => setError('')}>
              {error}
            </Banner>
          )}
        </BlockStack>
      )}
    </View>
  )
}
