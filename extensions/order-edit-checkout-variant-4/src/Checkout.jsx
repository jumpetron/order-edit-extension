import {
  reactExtension,
  Text,
  Pressable,
  Modal,
  InlineLayout,
  InlineStack,
  Button,
  BlockStack,
  TextField,
  ScrollView,
  ProductThumbnail,
  ToggleButtonGroup,
  ToggleButton,
  View,
  Select,
  InlineSpacer,
  Stepper
} from '@shopify/ui-extensions-react/checkout'

// 1. Choose an extension target
export default reactExtension(
  'customer-account.order-status.cart-line-item.render-after',
  () => <Extension />
)

function Extension() {
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
  return (
    <Pressable
      overlay={
        <Modal padding size='large' id='my-modal'>
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
                    <InlineLayout
                      columns={['fill', '30%']}
                      spacing='base'
                      padding='base'>
                      <InlineStack blockAlignment='center' spacing='extraTight'>
                        <ProductThumbnail size='base' source={product?.image} />
                        <BlockStack spacing='none'>
                          <Text size='base'>{product?.title}</Text>
                          <Text size='small'>{product?.variant?.title}</Text>
                          <Text size='small'>
                            Price: ${product?.variant?.price}
                          </Text>
                        </BlockStack>
                      </InlineStack>

                      <Stepper label='Quantity' value={1} min={1} />
                    </InlineLayout>
                  ))}
                </BlockStack>
              </ScrollView>
            </BlockStack>
            <InlineStack spacing='base' inlineAlignment='end'>
              <Button kind='primary'>Close</Button>
              <Button kind='secondary'>Save</Button>
            </InlineStack>
          </BlockStack>
        </Modal>
      }>
      <Text appearance='accent'>Edit Quantity</Text>
    </Pressable>
  )
}
