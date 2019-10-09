import { CustomField } from "../Common";

interface CountryState {

}

export interface Country {
  id: string
  name: string
  position: number
  iso: string
  taxFree: boolean
  active: boolean
  shippingAvailable: boolean
  iso3: string
  displayStateInRegistration: boolean
  forceStateInRegistration: boolean
  states: CountryState[] | null
  translations: any
  customFields: null
  _uniqueIdentifier: string
  versionId: string | null
  translated: any
  createdAt: Date
  updatedAt: Date | null
  extensions: any
}

export interface CustomerAddress {
  customerId: string
  countryId: string
  countryStateId: string | null
  salutationId: string
  firstName: string
  lastName: string
  zipcode: string
  city: string
  company: string | null
  department: string | null
  title: string | null
  street: string
  vatId: string | null
  phoneNumber: string | null
  additionalAddressLine1: string
  additionalAddressLine2: string
  country: Country
  countryState: string
  salutation: string
  customer: string
  customFields: CustomField

}

export interface BillingAddress extends CustomerAddress {
  
}

export interface ShippingAddress extends CustomerAddress {
  
}
