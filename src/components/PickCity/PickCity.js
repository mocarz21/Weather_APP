import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './PickCity.module.scss';

import { useState } from 'react';

const PickCity = params => {
  const [city, setCity] = useState('');

  const onSub= e =>{
    e.preventDefault();
    params.action(city)
    setCity('')

  }

  return (
    <form className={styles.pickCityForm} onSubmit={onSub}> 
      <label>
        <TextInput placeholder="Enter city name...." value={city} onChange={e => setCity(e.target.value)} />
      </label>
      <Button type = "submit">Search</Button>
    </form>
  );
};

export default PickCity;