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
  SkeletonTextBlock
} from '@shopify/ui-extensions-react/customer-account'
import { useEffect, useState } from 'react'
import { countries, provinces } from './lib/countries'
import formatCurrency from './lib/currencies'

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

  const handleDefaultData = async (slug) => {
    setError(null)
    setLoadingState((prev) => ({ ...prev, [slug]: true }))

    const sanitizedOrderName = orderName.replace('#', '')

    try {
      const response = await fetch(
        `https://order-editing-staging.cleversity.com/api/storefront/process-order-edit?order_name=${sanitizedOrderName}&shop_url=${shopUrl}&slug=${slug}`,
        {
          method: 'GET',
          headers: prepareHeaders(new Headers())
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
  console.log(defaultData)
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
          settings?.data?.map((option) => (
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
                  defaultData={defaultData['shipping_address']}
                  isLoading={loadingState['shipping_address']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'change_contact_info' && (
                <ContactInformation
                  defaultData={defaultData['change_contact_info']}
                  isLoading={loadingState['change_contact_info']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'change_product_quantities' && (
                <ChangeProductQuantities
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
                  defaultData={defaultData['request_order_cancel']}
                  isLoading={loadingState['request_order_cancel']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'download_invoice' && (
                <DownloadInvoice
                  defaultData={defaultData['download_invoice']}
                  isLoading={loadingState['download_invoice']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'edit_gift_message' && (
                <EditGiftMessage
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
                  defaultData={defaultData['add_another_product']}
                  isLoading={loadingState['add_another_product']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'change_size_variant' && (
                <ChangeProductSizeAndVariant
                  defaultData={defaultData['change_size_variant']}
                  isLoading={loadingState['change_size_variant']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'switch_product' && (
                <SwitchProduct
                  defaultData={defaultData['switch_product']}
                  isLoading={loadingState['switch_product']}
                  optionName={option?.slug}
                />
              )}
              {option?.slug == 'contact_customer_support' && (
                <ContactCustomerSupport
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

const ShippingAddress = ({ optionName, defaultData, isLoading }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [buttonText, setButtonText] = useState('Update')
  const [formErrors, setFormErrors] = useState({})

  const payload = {
    order_id: '123456',
    firstName: 'Ahmed',
    lastName: 'Faysal',
    address1: '325, New york',
    address2: '60 feet',
    phone: '016552546545',
    city: 'Dhaka',
    country_code: 'US',
    province_code: 'NY',
    zip: '1216'
  }
  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      <Form>
        {isLoading ? (
          <BlockStack spacing={'base'}>
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonTextBlock key={i} size='extraLarge' />
            ))}
          </BlockStack>
        ) : (
          <BlockStack>
            <Select
              required
              label='Country/Region'
              options={countries}
              value={defaultData?.data?.shipping_address?.countryCodeV2}
              onChange={(value) => handleInputChange('countryCodeV2', value)}
            />
            <InlineLayout columns={['fill', 'fill']} spacing='base'>
              <TextField
                required
                label='First Name'
                value={defaultData?.data?.shipping_address?.firstName}
                onChange={(value) => handleInputChange('firstName', value)}
                error={formErrors.firstName}
              />
              <TextField
                required
                label='Last Name'
                value={defaultData?.data?.shipping_address?.lastName}
                onChange={(value) => handleInputChange('lastName', value)}
                error={formErrors.lastName}
              />
            </InlineLayout>
            <PhoneField
              required
              label='Phone'
              autocomplete={true}
              value={defaultData?.data?.shipping_address?.phone}
              onChange={(value) => handleInputChange('phone', value)}
              error={formErrors.phone}
            />
            <TextField
              required
              label='Address'
              value={defaultData?.data?.shipping_address?.address1}
              onChange={(value) => handleInputChange('address1', value)}
              error={formErrors.address1}
            />
            <TextField
              label='Apartment, suite, etc. (Optional)'
              value={defaultData?.data?.shipping_address?.address2}
              onChange={(value) => handleInputChange('address2', value)}
              error={formErrors.address2}
            />

            <Select
              required
              label='Provinces'
              value={payload?.province_code || 'AL'}
              options={provinces}
              onChange={(value) => handleInputChange('provinceCode', value)}
              error={formErrors.province_code}
            />

            <InlineLayout columns={['fill', 'fill']} spacing='base'>
              <TextField
                required
                label='City'
                value={defaultData?.data?.shipping_address?.city}
                onChange={(value) => handleInputChange('city', value)}
                error={formErrors.city}
              />
              <TextField
                required
                label='ZIP Code'
                value={defaultData?.data?.shipping_address?.zip}
                onChange={(value) => handleInputChange('zip', value)}
                error={formErrors.zip}
              />
            </InlineLayout>
            <Checkbox id='checkbox' name='checkbox'>
              Update your default address
            </Checkbox>

            {/* Conditional Success and Error Banners */}
            {submitSuccess && (
              <Banner
                status='success'
                title='Your shipping address has been successfully updated!'
              />
            )}
            {submitError && <Banner status='warning' title={submitError} />}

            {/* Submit Button with Spinner */}
            <Button accessibilityRole='submit'>
              {isSubmitting ? <Spinner appearance='subdued' /> : buttonText}
            </Button>
          </BlockStack>
        )}
      </Form>
    </View>
  )
}

const ContactInformation = ({ optionName, defaultData, isLoading }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [buttonText, setButtonText] = useState('Update contact information')
  const [formErrors, setFormErrors] = useState({})

  const payload = {
    email: 'ahmedfoysal@gmail.com',
    // id: contactInformation?.id || '',
    order_id: '123456',
    phone: '021597845523236'
  }
  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      <Form>
        {isLoading ? (
          <BlockStack spacing={'base'}>
            {Array.from({ length: 2 }).map((_, i) => (
              <SkeletonTextBlock key={i} size='extraLarge' />
            ))}
          </BlockStack>
        ) : (
          <BlockStack>
            <TextField
              value={defaultData?.data?.contact?.email}
              label='Email'
              name='email'
              id='email'
              onChange={(value) => handleInputChange('email', value)}
              error={formErrors.email}
              required
            />
            <TextField
              value={defaultData?.data?.contact?.phone}
              label='Phone Number'
              name='phone'
              onChange={(value) => handleInputChange('phone', value)}
              id='phone'
              error={formErrors.phone}
              required
            />
            <Checkbox id='checkbox' name='checkbox'>
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
        )}
      </Form>
    </View>
  )
}

const ContactCustomerSupport = ({ optionName, defaultData, isLoading }) => {
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

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      <Form>
        {isLoading ? (
          <BlockStack spacing={'base'}>
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonTextBlock key={i} size='extraLarge' />
            ))}
          </BlockStack>
        ) : (
          <BlockStack>
            <Select label='Support Reason' value='1' options={contactReason} />
            <TextField
              value={defaultData?.data?.customer?.email}
              label='Email'
              name='email'
              id='email'
              onChange={(value) => handleInputChange('email', value)}
              error={formErrors.email}
              required
            />
            <TextField
              value={defaultData?.data?.customer?.phone}
              label='Phone Number'
              name='phone'
              onChange={(value) => handleInputChange('phone', value)}
              id='phone'
              error={formErrors.phone}
              required
            />
            <TextField label='Write here' multiline='5' />
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
        )}
      </Form>
    </View>
  )
}

const ChangeProductQuantities = ({ optionName, defaultData, isLoading }) => {
  const [loadMore, setLoadMore] = useState(4)
  const [buttonText, setButtonText] = useState('Save')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleViewMore = () => {
    setLoadMore((prevCount) => prevCount + 4)
  }

  const productsToShow = defaultData?.data?.product?.edges.slice(0, loadMore)
  console.log(defaultData?.data?.product?.edges)
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
                <Stepper label='Quantity' value={1} min={1} />
                <Link to='#'>Remove</Link>
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
          <Button kind='primary'>
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

const CancelOrder = ({ optionName, defaultData, isLoading }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Cancel Order')
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const cancelReason =
    defaultData?.data?.cancel_reason_list?.returnReasons?.map((item) => ({
      value: item.title,
      label: item.title
    })) || []
  console.log(defaultData?.data?.cancel_reason_list)
  return (
    <View id={optionName} padding={['none', 'base', 'base', 'base']}>
      <BlockStack>
        <Form>
          {isLoading ? (
            <BlockStack spacing={'base'}>
              {Array.from({ length: 5 }).map((_, i) => (
                <SkeletonTextBlock key={i} size='extraLarge' />
              ))}
            </BlockStack>
          ) : (
            <BlockStack>
              <Select
                label='Select cancel Reason'
                value='1'
                options={cancelReason}
              />

              <TextField
                label='Why you want to cancel your order?'
                multiline='5'
              />
              <Text size='small' appearance='subdued'>
                You'll be contacted by the customer support team to confirm the
                cancellation.
              </Text>
            </BlockStack>
          )}
        </Form>
        <Button kind='primary'>
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

const EditGiftMessage = ({ optionName, defaultData }) => {
  const [giftMessages, setGiftMessages] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [buttonText, setButtonText] = useState('Save Message')
  const [redirectUrl, setRedirectUrl] = useState(null)

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      <BlockStack>
        <InlineLayout columns={['fill', 'auto']} spacing='base'>
          <InlineStack blockAlignment='center' spacing='base'>
            <ProductThumbnail
              size='base'
              source={
                'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400'
              }
              badge={'5'} // Display the quantity as a badge
            />
            <BlockStack spacing='none'>
              <Text size='base'>{'The Multi-managed Snowboard'}</Text>
              <Text size='small'>{'Variant Title'}</Text>
              <Text size='small'>{`$200`}</Text>
            </BlockStack>
          </InlineStack>
          <TextField label='Type your message' />
        </InlineLayout>

        <Button kind='primary'>
          {isSubmitting ? <Spinner appearance='subdued' /> : buttonText}
        </Button>

        {submitError && <Banner status='critical' title={submitError} />}
        {submitSuccess && (
          <Banner status='success' title='Gift message saved successfully!' />
        )}
        {redirectUrl && (
          <BlockStack inlineAlignment='center'>
            <Link to={redirectUrl} onPress={resetState}>
              Click here to continue the order process
            </Link>
          </BlockStack>
        )}
      </BlockStack>
    </View>
  )
}

const DownloadInvoice = ({ optionName, defaultData, isLoading }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [invoiceUrl, setInvoiceUrl] = useState(null)
  const [buttonText, setButtonText] = useState('Generate Invoice')
  const [isBusiness, setIsBusiness] = useState(false)
  const [updateBilling, setUpdateBilling] = useState(false)

  const handleBusinessChange = (value) => {
    setIsBusiness(value)
  }

  const handleBillingChange = (value) => {
    setUpdateBilling(value)
  }
  console.log(defaultData?.data)
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
          {/* Address Section */}
          <InlineLayout columns={['fill', 'fill']}>
            <BlockStack spacing='tight'>
              <Text appearance='subdued'>Shipping Address</Text>
              <BlockStack spacing='0'>
                <Text>{defaultData?.data?.shipping_address?.name}</Text>
                <Text>
                  {defaultData?.data?.shipping_address?.address1},{' '}
                  {defaultData?.data?.shipping_address?.address2 &&
                    defaultData?.data?.shipping_address?.address2}
                </Text>
                <Text>
                  {defaultData?.data?.shipping_address?.city}{' '}
                  {defaultData?.data?.shipping_address?.zip},{' '}
                  {defaultData?.data?.shipping_address?.countryCodeV2}
                </Text>
              </BlockStack>
            </BlockStack>
            <BlockStack spacing='tight'>
              <Text appearance='subdued'>Billing Address</Text>
              <BlockStack spacing='0'>
                <Text>{defaultData?.data?.billing_address?.name}</Text>
                <Text>
                  {defaultData?.data?.billing_address?.address1},{' '}
                  {defaultData?.data?.billing_address?.address2 &&
                    defaultData?.data?.billing_address?.address2}
                </Text>
                <Text>
                  {defaultData?.data?.billing_address?.city}{' '}
                  {defaultData?.data?.billing_address?.zip},{' '}
                  {defaultData?.data?.billing_address?.countryCodeV2}
                </Text>
              </BlockStack>
            </BlockStack>
          </InlineLayout>
          <Text appearance='subdued'>Customize your invoice</Text>
          {/* Business Options */}
          <Checkbox
            id='checkbox-business'
            name='checkbox-business'
            checked={isBusiness}
            onChange={handleBusinessChange}
            accessibilityLabel='Enable business purchase options'>
            Purchasing as a business
          </Checkbox>
          {isBusiness && (
            <BlockStack>
              <TextField label='Company Name' />
              <Select
                required
                label='Country/Region'
                options={countries}
                value='US'
              />
              <Select required label='Tax ID' options={countries} value='US' />
              <TextField label='Tax Number' />
            </BlockStack>
          )}

          {/* Billing Options */}
          <Checkbox
            id='checkbox-billing'
            name='checkbox-billing'
            checked={updateBilling}
            onChange={handleBillingChange}
            accessibilityLabel='Enable custom billing details'>
            Update invoice billing details
          </Checkbox>
          {updateBilling && (
            <BlockStack>
              <Select
                required
                label='Country/Region'
                options={countries}
                value='US'
              />
              <TextField label='Address' />
              <TextField label='Apartment, suite, etc. (Optional)' />
              <Select
                required
                label='Provinces'
                value='AL'
                options={provinces}
              />
              <InlineLayout columns={['fill', 'fill']} spacing='base'>
                <TextField label='City' />
                <TextField label='Postal Code' />
              </InlineLayout>
            </BlockStack>
          )}

          {/* Invoice Options */}
          <ChoiceList name='group-single' variant='group' value='ship'>
            <Choice id='ship'>Send invoice by email</Choice>
            <Choice id='email'>Download Invoice</Choice>
          </ChoiceList>

          {/* Generate Invoice Button */}
          <Button kind='primary' disabled={isSubmitting}>
            {isSubmitting ? <Spinner appearance='subdued' /> : buttonText}
          </Button>

          {/* Success/Error Messages */}
          {success && invoiceUrl && (
            <Banner status='success' title='Invoice generated successfully!' />
          )}
          {invoiceUrl && (
            <BlockStack inlineAlignment='center'>
              <Link to={invoiceUrl}>Click here to download your invoice.</Link>
            </BlockStack>
          )}
          {error && <Banner status='critical' title={`Error: ${error}`} />}
        </BlockStack>
      )}
    </View>
  )
}

const AddAnotherProduct = ({ optionName }) => {
  const [loadMore, setLoadMore] = useState(4)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
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

  const productsToShow = products.slice(0, loadMore)

  const handleImageChange = (newSource) => {
    setSelectedImageSource(newSource) // Update the selected image source
  }
  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      <BlockStack>
        <BlockStack spacing='loose'>
          <TextField label='Search product' />
          {isLoading && <Spinner appearance='subdued' />}
          {error && <Banner status='critical' title={error} />}
          {productsToShow.map((product) => (
            <InlineLayout
              key={product?.id}
              blockAlignment='center'
              spacing='extraTight'
              columns={['fill', 'auto']}>
              <InlineStack blockAlignment='center' spacing='extraTight'>
                <ProductThumbnail size='base' source={product?.image} />
                <BlockStack spacing='extraTight'>
                  <Heading level='3'>{product?.title}</Heading>
                  <InlineStack>
                    <Text
                      appearance='subdued'
                      size='base'
                      accessibilityRole={
                        product?.variant?.discountPrice ? 'deletion' : undefined
                      }>
                      ${product?.variant?.price}{' '}
                    </Text>
                    {product?.variant?.discountPrice && (
                      <Text size='base' appearance='critical'>
                        ${product?.variant?.discountPrice}
                      </Text>
                    )}
                  </InlineStack>
                  <InlineStack spacing='extraTight'>
                    <Icon source='discount' appearance='success' />
                    <Text appearance='success' emphasis='bold'>
                      Save 10%
                    </Text>
                  </InlineStack>
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
                            Selling Plans Ski Wax Selling Plans Ski Wax Selling
                            Plans Ski Wax
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
    </View>
  )
}

const ChangeProductSizeAndVariant = ({
  optionName,
  defaultData,
  isLoading
}) => {
  const [loadMore, setLoadMore] = useState(4)
  const [lineItemsToBeChange, setLineItemsToBeChange] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Save')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const handleViewMore = () => {
    setLoadMore((prevCount) => prevCount + 4) // Show 4 more products on each click
  }

  const products = [
    {
      id: '123',
      image:
        'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
      title: 'The Collection Snowboard: Hydrogen',
      currentQuantity: '1',
      variant: {
        title: 'medium / black / large',
        price: '200'
      }
    }
  ]
  const productsToShow = defaultData?.data?.product?.edges.slice(0, loadMore)
  console.log(defaultData?.data?.product?.edges)
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
          {productsToShow?.map((item) => (
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
                value='2'
                options={item?.node?.product?.variants?.edges?.map(
                  (variant) => ({
                    value: variant?.node?.id || '',
                    label: variant?.node?.title
                  })
                )}
              />
            </InlineLayout>
          ))}

          {/* Save button */}
          <Button kind='primary'>
            {isSubmitting ? <Spinner appearance='subdued' /> : buttonText}
          </Button>
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

const SwitchProduct = ({ optionName, defaultData }) => {
  const [loadMore, setLoadMore] = useState(4)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedReplacements, setSelectedReplacements] = useState([])
  const [buttonText, setButtonText] = useState('Save')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [selectedImageSource, setSelectedImageSource] = useState(
    'https://cdn.shopify.com/s/files/1/0711/2173/1816/files/44694ee386818f3276566210464cf341.jpg?v=1731948240'
  )

  const products = [
    {
      id: '123',
      image:
        'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
      title: 'The Collection Snowboard: Hydrogen',
      quantity: '1',
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
      quantity: '1',
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
      quantity: '1',
      variant: {
        title: 'medium / black / large',
        price: '200'
      }
    },
    {
      id: '126',
      image:
        'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
      title: 'The Collection Snowboard: Hydrogen',
      quantity: '1',
      variant: {
        title: 'medium / black / large',
        price: '200'
      }
    },
    {
      id: '127',
      image:
        'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
      title: 'The Collection Snowboard: Hydrogen',
      quantity: '1',
      variant: {
        title: 'medium / black / large',
        price: '200'
      }
    },
    {
      id: '128',
      image:
        'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
      title: 'The Collection Snowboard: Hydrogen',
      quantity: '1',
      variant: {
        title: 'medium / black / large',
        price: '200'
      }
    }
  ]

  const handleViewMore = () => {
    setLoadMore((prevCount) => prevCount + 4)
  }
  const [hoveredProductId, setHoveredProductId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const productsToShow = products.slice(0, loadMore)
  const [isProductSelect, setIsProductSelect] = useState(false)
  const handleImageChange = (newSource) => {
    setSelectedImageSource(newSource) // Update the selected image source
  }

  const handleSinlgeProductClick = () => {
    setIsProductSelect(true)
  }

  const handleBack = () => {
    setIsProductSelect(false)
  }
  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      <BlockStack>
        <BlockStack spacing='loose'>
          <TextField label='Search product' icon={{ source: 'magnify' }} />

          {productsToShow.map((product) => (
            <InlineLayout
              key={product?.id}
              blockAlignment='center'
              spacing='base'
              columns={['fill', 'auto']}>
              <InlineStack spacing='extraTight'>
                <ProductThumbnail size='base' source={product?.image} />
                <BlockStack spacing='none'>
                  <Text size='base'>{product?.title}</Text>
                  <Text size='small'>{product?.variant?.title}</Text>
                  <Text size='small'>Price: ${product?.variant?.price}</Text>
                </BlockStack>
              </InlineStack>
              <Button
                overlay={
                  <Modal
                    padding
                    size='large'
                    id='my-modal'
                    title='Select a replacement product'>
                    {isProductSelect ? (
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
                            <Button onPress={handleBack}>Back</Button>
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
                          <ScrollView maxBlockSize={400}>
                            <BlockStack overflow='hidden' padding='tight'>
                              {products.map((product) => (
                                <Pressable
                                  onPress={handleSinlgeProductClick}
                                  key={product.id}
                                  onPointerEnter={() =>
                                    setHoveredProductId(product.id)
                                  }
                                  onPointerLeave={() =>
                                    setHoveredProductId(null)
                                  }
                                  background={
                                    hoveredProductId === product.id
                                      ? 'subdued'
                                      : 'transparent'
                                  }
                                  cornerRadius='base'>
                                  <InlineLayout
                                    columns={['fill', '30%']}
                                    spacing='base'
                                    padding='base'>
                                    <InlineStack
                                      blockAlignment='center'
                                      spacing='extraTight'>
                                      <ProductThumbnail
                                        size='base'
                                        source={product?.image}
                                      />
                                      <BlockStack spacing='none'>
                                        <Text size='base'>
                                          {product?.title}
                                        </Text>
                                        <Text size='small'>
                                          {product?.variant?.title}
                                        </Text>
                                        <Text size='small'>
                                          Price: ${product?.variant?.price}
                                        </Text>
                                      </BlockStack>
                                    </InlineStack>

                                    <ToggleButtonGroup>
                                      <InlineLayout>
                                        <ToggleButton id='222'>
                                          <View inlineAlignment='center'>
                                            View
                                          </View>
                                        </ToggleButton>
                                      </InlineLayout>
                                    </ToggleButtonGroup>
                                  </InlineLayout>
                                </Pressable>
                              ))}
                            </BlockStack>
                          </ScrollView>
                        </BlockStack>

                        {/* Sticky Footer */}

                        <InlineLayout
                          blockAlignment='baseline'
                          columns={['fill', 'auto']}>
                          <Text>Selected: 1</Text>
                          <InlineStack spacing='base'>
                            <Button kind='primary'>Back</Button>
                            <Button kind='secondary'>Done</Button>
                          </InlineStack>
                        </InlineLayout>
                      </BlockStack>
                    )}
                  </Modal>
                }>
                Replace
              </Button>
            </InlineLayout>
          ))}
        </BlockStack>

        <Link onPress={handleViewMore}>View more products</Link>

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
    </View>
  )
}
