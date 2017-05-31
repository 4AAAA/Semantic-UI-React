import React from 'react'
import { Dropdown } from 'semantic-ui-react'

 const countryOptions = [
   { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' } ,
   { key: 'ae', value: 'ae', flag: 'ae', text: 'United Arab Emirates' },
   { key: 'us', value: 'us', flag: 'us', text: 'United States' },
 ]

const DropdownExampleSearchSelection = () => (
  <Dropdown placeholder='Select Country' fluid search selection minCharacters={3} options={countryOptions} />
)

export default DropdownExampleSearchSelection