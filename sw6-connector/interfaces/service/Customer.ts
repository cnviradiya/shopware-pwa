import axios from 'axios'
import { CustomerDetail } from '../api/sales-channel-api.customer.detail.GET'

export async function getDetails<CustomerDetail>(customerToken: string) {
  
  return await axios.get('/customer')
}