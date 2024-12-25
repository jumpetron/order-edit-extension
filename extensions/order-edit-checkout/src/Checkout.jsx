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
  useApi
} from '@shopify/ui-extensions-react/customer-account'
import { useState } from 'react'
import { countries, provinces } from './lib/countries'

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />
)

function Extension() {
  const data = useApi()
  console.log(data.sessionToken)
  const [openId, setOpenId] = useState([])
  const editOrderOption = [
    {
      name: 'Edit Shipping Address',
      icon: 'delivery',
      settings: 'shipping_address',
      isAllow: true
    },
    {
      name: 'Change Contact Information',
      icon: 'profile',
      settings: 'contact_information',
      isAllow: true
    },
    {
      name: 'Contact Customer Support',
      icon: 'profile',
      settings: 'contact_customer_support',
      isAllow: true
    },
    {
      name: 'Change Product Quantities',
      icon: 'plus',
      settings: 'change_product_quantities',
      isAllow: true
    },
    {
      name: 'Change Size or Variant',
      icon: 'return',
      settings: 'change_size_or_variant',
      isAllow: true
    },
    {
      name: 'Switch Product',
      icon: 'reorder',
      settings: 'switch_product',
      isAllow: true
    },

    {
      name: 'Upgrade Shipping Methods',
      icon: 'truck',
      settings: 'upgrade_shipping_method',
      isAllow: true
    },
    {
      name: 'Add Another Product',
      icon: 'cart',
      settings: 'add_another_product',
      isAllow: true
    },
    {
      name: 'Apply Discount',
      icon: 'discount',
      settings: 'apply_discount',
      isAllow: true
    },
    {
      name: 'Request For Order Cancel',
      icon: 'close',
      settings: 'cancel_order',
      isAllow: true
    },
    {
      name: 'Change Payment Method',
      icon: 'creditCard',
      settings: 'change_payment_method',
      isAllow: true
    },

    {
      name: 'Edit Gift Message',
      icon: 'gift',
      settings: 'edit_gift_message',
      isAllow: true
    },
    {
      name: 'Download Invoice',
      icon: 'image',
      settings: 'download_invoice',
      isAllow: true
    }
  ]

  const handleDisclosure = (open) => {
    setOpenId(open)
  }

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
        {editOrderOption
          ?.filter((option) => option.isAllow)
          ?.map((option) => (
            <Disclosure
              key={option?.settings}
              onToggle={(open) => handleDisclosure(open)}>
              <Pressable toggles={option?.settings} padding='base'>
                <InlineLayout
                  blockAlignment='center'
                  spacing='base'
                  columns={['auto', 'fill', 'auto']}>
                  <Icon source={option.icon} appearance='monochrome' />
                  <Heading>{option.name}</Heading>
                  <Icon
                    source={
                      openId.includes(option?.settings) ? 'minus' : 'plus'
                    }
                    appearance='monochrome'
                  />
                </InlineLayout>
              </Pressable>
              {option?.settings == 'shipping_address' && (
                <ShippingAddress optionName={option?.settings} />
              )}
              {option?.settings == 'contact_information' && (
                <ContactInformation optionName={option?.settings} />
              )}
              {option?.settings == 'change_product_quantities' && (
                <ChangeProductQuantities optionName={option?.settings} />
              )}
              {option?.settings == 'upgrade_shipping_method' && (
                <UpgradeShippingMethod optionName={option?.settings} />
              )}
              {option?.settings == 'apply_discount' && (
                <ApplyDiscount optionName={option?.settings} />
              )}
              {option?.settings == 'cancel_order' && (
                <CancelOrder optionName={option?.settings} />
              )}
              {option?.settings == 'download_invoice' && (
                <DownloadInvoice optionName={option?.settings} />
              )}
              {option?.settings == 'edit_gift_message' && (
                <EditGiftMessage optionName={option?.settings} />
              )}
              {option?.settings == 'change_payment_method' && (
                <ChangePaymentMethod optionName={option?.settings} />
              )}
              {option?.settings == 'add_another_product' && (
                <AddAnotherProduct optionName={option?.settings} />
              )}
              {option?.settings == 'change_size_or_variant' && (
                <ChangeProductSizeAndVariant optionName={option?.settings} />
              )}
              {option?.settings == 'switch_product' && (
                <SwitchProduct optionName={option?.settings} />
              )}
              {option?.settings == 'contact_customer_support' && (
                <ContactCustomerSupport optionName={option?.settings} />
              )}
            </Disclosure>
          ))}
      </BlockStack>
    </View>
  )
}

const ShippingAddress = ({ optionName }) => {
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
        <BlockStack>
          <Select
            required
            label='Country/Region'
            options={countries}
            value={'US'}
            onChange={(value) => handleInputChange('countryCodeV2', value)}
          />
          <InlineLayout columns={['fill', 'fill']} spacing='base'>
            <TextField
              required
              label='First Name'
              value={payload?.firstName || ''}
              onChange={(value) => handleInputChange('firstName', value)}
              error={formErrors.firstName}
            />
            <TextField
              required
              label='Last Name'
              value={payload?.lastName || ''}
              onChange={(value) => handleInputChange('lastName', value)}
              error={formErrors.lastName}
            />
          </InlineLayout>
          <PhoneField
            required
            label='Phone'
            autocomplete={true}
            value={payload?.phone || ''}
            onChange={(value) => handleInputChange('phone', value)}
            error={formErrors.phone}
          />
          <TextField
            required
            label='Address'
            value={payload?.address1 || ''}
            onChange={(value) => handleInputChange('address1', value)}
            error={formErrors.address1}
          />
          <TextField
            label='Apartment, suite, etc. (Optional)'
            value={payload?.address2 || ''}
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
              value={payload?.city || ''}
              onChange={(value) => handleInputChange('city', value)}
              error={formErrors.city}
            />
            <TextField
              required
              label='ZIP Code'
              value={payload?.zip || ''}
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
      </Form>
    </View>
  )
}

const ContactInformation = ({ optionName }) => {
  const [contactInformation, setContactInformation] = useState({
    email: 'ahmedfoysal@gmail.com',
    phone: '021597845523236'
  })
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
        <BlockStack>
          <TextField
            value={contactInformation?.email}
            label='Email'
            name='email'
            id='email'
            onChange={(value) => handleInputChange('email', value)}
            error={formErrors.email}
            required
          />
          <TextField
            value={contactInformation?.phone}
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
      </Form>
    </View>
  )
}

const ContactCustomerSupport = ({ optionName }) => {
  const [contactInformation, setContactInformation] = useState({
    email: 'ahmedfoysal@gmail.com',
    phone: '021597845523236'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [buttonText, setButtonText] = useState('Send message')
  const [formErrors, setFormErrors] = useState({})
  const contactReason = [
    {
      value: '1',
      label: 'I have a question about the product'
    },
    {
      value: '2',
      label: 'I want to change something about my order'
    },
    {
      value: '3',
      label: 'I want to cancel my order'
    },
    {
      value: '4',
      label: `I haven't received my order`
    },
    {
      value: '5',
      label: `There's problem with my order`
    },
    {
      value: '6',
      label: 'Other'
    }
  ]
  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      <Form>
        <BlockStack>
          <Select label='Support Reason' value='1' options={contactReason} />
          <TextField
            value={contactInformation?.email}
            label='Email'
            name='email'
            id='email'
            onChange={(value) => handleInputChange('email', value)}
            error={formErrors.email}
            required
          />
          <TextField
            value={contactInformation?.phone}
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
      </Form>
    </View>
  )
}

const ChangeProductQuantities = ({ optionName }) => {
  const [loadMore, setLoadMore] = useState(4)
  const [buttonText, setButtonText] = useState('Save')
  const [isSubmitting, setIsSubmitting] = useState(false) // For saving data
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleViewMore = () => {
    setLoadMore((prevCount) => prevCount + 4)
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
    }
  ]

  const productsToShow = products.slice(0, loadMore)

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      <BlockStack>
        {productsToShow?.map((item) => (
          <InlineLayout
            key={item.id}
            blockAlignment='center'
            spacing='base'
            columns={['fill', '30%']}>
            <InlineLayout columns={['auto', 'fill']} spacing='base'>
              <ProductThumbnail size='base' source={item?.image} badge={'1'} />
              <BlockStack spacing='none'>
                <Text size='base' emphasis='bold'>
                  {item?.title}
                </Text>
                <Text size='small'>{item?.variant?.title}</Text>
                <Text size='small'>Price: ${item?.variant?.price}</Text>
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
        {loadMore < products.length && (
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
    </View>
  )
}

const UpgradeShippingMethod = ({ optionName }) => {
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

const ApplyDiscount = ({ optionName }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [buttonText, setButtonText] = useState('Apply Discount')
  const [formErrors, setFormErrors] = useState({})
  const [discountCode, setDiscountCode] = useState('')
  const [redirectUrl, setRedirectUrl] = useState(null)

  const handleInputChange = (value) => {
    setDiscountCode(value)
    setFormErrors({})
  }

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      <BlockStack>
        <TextField
          label='Discount Code'
          name='discount'
          id='discount'
          value={discountCode}
          onChange={handleInputChange}
          error={formErrors.discount}
        />
        <Button kind='primary'>
          {isSubmitting ? <Spinner appearance='subdued' /> : buttonText}
        </Button>
        <Banner
          status='info'
          title='Important: Your order will be canceled and a new draft order will be created. You will need to complete the order process again.'
        />
        {submitSuccess && (
          <Banner status='success' title='Discount successfully applied!' />
        )}
        {submitError && <Banner status='critical' title={submitError} />}
        {redirectUrl && (
          <BlockStack inlineAlignment='center'>
            <Link to={redirectUrl} onPress={handleRedirectClick}>
              Click here to continue the order process
            </Link>
          </BlockStack>
        )}
      </BlockStack>
    </View>
  )
}

const CancelOrder = ({ optionName }) => {
  const [contactInformation, setContactInformation] = useState({
    email: 'ahmedfoysal@gmail.com',
    phone: '021597845523236'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Cancel Order')
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const cancelReason = [
    {
      value: '1',
      label: 'Found a better price elswhere'
    },
    {
      value: '2',
      label: 'Item is no longer needed'
    },
    {
      value: '3',
      label: 'Delivery costs are too expensive'
    },
    {
      value: '4',
      label: `The item was purchased by mistake`
    },
    {
      value: '5',
      label: `The order is taking too long to arrive`
    },
    {
      value: '6',
      label: 'Change mind about the product'
    }
  ]
  return (
    <View id={optionName} padding={['none', 'base', 'base', 'base']}>
      <BlockStack>
        <Form>
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

const ChangePaymentMethod = ({ optionName }) => {
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

const EditGiftMessage = ({ optionName }) => {
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

const DownloadInvoice = ({ optionName }) => {
  const [isLoading, setIsLoading] = useState(false)
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

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      <BlockStack>
        {/* Address Section */}
        <InlineLayout columns={['fill', 'fill']}>
          <BlockStack spacing='tight'>
            <Text appearance='subdued'>Shipping Address</Text>
            <BlockStack spacing='0'>
              <Text>Ahmed Faysal</Text>
              <Text>Mirpur</Text>
              <Text>Dhaka 1216, BD</Text>
            </BlockStack>
          </BlockStack>
          <BlockStack spacing='tight'>
            <Text appearance='subdued'>Billing Address</Text>
            <BlockStack spacing='0'>
              <Text>Ahmed Faysal</Text>
              <Text>Mirpur</Text>
              <Text>Dhaka 1216, BD</Text>
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
            <Select required label='Provinces' value='AL' options={provinces} />
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
        <Button kind='primary' disabled={isLoading}>
          {isLoading ? <Spinner appearance='subdued' /> : buttonText}
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
              spacing='base'
              columns={['fill', 'auto']}>
              <InlineStack blockAlignment='center' spacing='extraTight'>
                <ProductThumbnail size='base' source={product?.image} />
                <BlockStack spacing='none'>
                  <Text size='base'>{product?.title}</Text>
                  <Text size='small'>{product?.variant?.title}</Text>
                  <Text size='small'>Price: ${product?.variant?.price}</Text>
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

const ChangeProductSizeAndVariant = ({ optionName }) => {
  const [lineItemsToBeChange, setLineItemsToBeChange] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Save')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

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

  return (
    <View id={optionName} padding={['base', 'base', 'base', 'base']}>
      <BlockStack>
        {products.map((item) => (
          <InlineLayout
            key={item?.id}
            blockAlignment='center'
            spacing='base'
            columns={['fill', '35%']}>
            <InlineLayout columns={['auto', 'fill']} spacing={'base'}>
              <ProductThumbnail
                size='base'
                source={item?.image}
                badge={item?.currentQuantity} // Display the quantity as a badge
              />
              <BlockStack spacing={'none'}>
                <Text size='base'>{item?.title}</Text>
                <Text size='small'>{item?.variant?.title}</Text>
                <Text size='small'>${item?.variant?.price}</Text>
              </BlockStack>
            </InlineLayout>
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
    </View>
  )
}

const SwitchProduct = ({ optionName }) => {
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
    }
  ]

  const handleViewMore = () => {
    setLoadMore((prevCount) => prevCount + 4)
  }
  const [hoveredProductId, setHoveredProductId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const productsToShow = products.slice(0, loadMore)

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
                    <BlockStack>
                      <TextField
                        label='Search for product'
                        icon={{ source: 'magnify' }}
                      />
                      <BlockStack>
                        <Pressable
                          onPointerEnter={() => setHoveredProductId(product.id)}
                          onPointerLeave={() => setHoveredProductId(null)}
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
                                <Text size='base'>{product?.title}</Text>
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
                                    Select Product
                                  </View>
                                </ToggleButton>
                              </InlineLayout>
                            </ToggleButtonGroup>
                          </InlineLayout>
                        </Pressable>
                      </BlockStack>
                    </BlockStack>
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
