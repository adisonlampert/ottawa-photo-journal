import { Record } from 'airtable';
import * as React from 'react';
import { useEffect } from 'react';
//import './styles/styles.css';


interface Images {
  [month: string]: string[];
}

// interface ENV {
//   NODE_ENV: string | undefined;
//   PORT: number | undefined;
//   REACT_APP_AIRTABLE: string | undefined;
// }

// interface Config {
//   NODE_ENV: string;
//   PORT: number;
//   REACT_APP_AIRTABLE: string;
// }


const App = () => {
  const [images, setImages] = React.useState<Images[] | null>(null);

  console.log('testing');
  const apiKey: string = process.env.REACT_APP_AIRTABLE;
  console.log('apiKey', process.env.HELLO);

  useEffect(() => {
    fetch('https://api.airtable.com/v0/appcSJRvyAChjdim6/Photos?api_key='+apiKey)
      .then(res => res.json())
        .then(res => {
          for (const [key, value] of Object.entries(res.records)) {
            const imgProperties: any = value;
            console.log(imgProperties['fields']);
          }
      })
      .catch(error => console.log(error))
  });

  return(<h1>hi</h1>)

}

export default App;