import * as React from 'react';
import Banner from './Banner' 
import Table from './Table';
import { Entry } from './type';

const uri = 'https://api.eia.gov/v2/international/data?api_key=KJp8vTK2mo4zf4j84qoN9lQn283ryzeyRvTnMK0v&facets[unit][]=MTOE&frequency=annual'

let App = () => {
  const [entryList, setEntryList] = React.useState<Array<Entry>>([])
  React.useEffect(() => {
    fetch(uri)
    .then(
      response => response.json()
    )
    .then(
      json => setEntryList(json?.response?.data.map(
        (dataEntry : any) : Entry => {
          return {
              year: dataEntry?.period as number,
              country: dataEntry?.countryRegionName as string,
              product: dataEntry?.productName as string,
              activity: dataEntry?.activityName as string
          }
        }
      ))
    )
    .catch()}, [])

  return (
      <React.Fragment>
        <Banner/>
        <Table entryList={entryList}/>
      </React.Fragment>
  );
}

export default App;
