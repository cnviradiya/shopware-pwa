import { CustomField } from "../Common";

export interface OrderCustomer {
  email: string
  orderId: string,
  salutationId: string,
  firstName: string,
  lastName: string,
  title: string | null,
  company: string | null,
  customerNumber: number,
  customerId: string,
  customer: string | null,
  salutation: string | null,
  order: string | null,
  customFields: CustomField,
  _uniqueIdentifier: string,
  versionId: string,
  translated: [],
  createdAt: Date,
  updatedAt: Date | null,
  extensions: any
  id: string,
  orderVersionId: string
}