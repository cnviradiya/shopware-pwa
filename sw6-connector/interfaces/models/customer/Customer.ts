import { ProductReview } from '../product/Review';
import { PaymentMethod } from '../checkout/Payment';
import { BillingAddress, ShippingAddress, CustomerAddress } from './Address';
import { Tag, Promotion, CustomField, Extension } from '../Common';
import { CustomerGroup } from './CustomerGroup';
import { OrderCustomer } from './OrderCustomer';

export interface Customer {
  id: string
  groupId: string
  defaultPaymentMethodId: string
  salesChannelId: string
  languageId: string
  lastPaymentMethodId: string | null
  defaultBillingAddressId: string | null
  defaultShippingAddressId: string | null
  customerNumber: number
  salutationId: string | null
  firstName: string
  lastName: string
  company: string | null
  email: string
  title: string | null
  active: boolean
  guest: boolean
  firstLogin: Date | null
  lastLogin: Date | null
  newsletter: boolean
  birthday: Date
  lastOrderDate: Date
  orderCount: number
  createdAt: Date
  updatedAt: Date
  group: CustomerGroup
  defaultPaymentMethod: PaymentMethod
  defaultBillingAddress: BillingAddress
  defaultShippingAddress: ShippingAddress
  activeBillingAddress: BillingAddress
  activeShippingAddress: ShippingAddress
  addresses: Array<CustomerAddress>
  orderCustomers: Array<OrderCustomer> | null
  autoIncrement: number
  tags: Array<Tag> | null
  promotions: Array<Promotion> | null
  customFields: Array<CustomField> | null
  productReviews: Array<ProductReview>
  _uniqueIdentifier: string
  versionId: string | null
  translated: any
  extensions: Array<Extension>
}
