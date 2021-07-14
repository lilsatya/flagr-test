import { useState } from 'react';
import axios from 'axios';
import { publishEventABTest } from '../utils/ReactGAEvent';

type TVariant = {
  date: Date,
  id: string,
  entity: string,
};

const AbTesting = () => {
  const [entityID, setEntityID] = useState('');
  const [variants, setVariants] = useState<TVariant[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntityID(e.target.value);
  }

  const handleEvaluate = async () => {
    const res = await axios.post('http://localhost:18000/api/v1/evaluation', {
      entityID,
      flagID: 1,
    });

    if (res.data.variantKey) {
      const data = {
        date: new Date(),
        id: res.data.variantKey,
        entity: entityID,
      };

      publishEventABTest(data.id, data.entity);

      setVariants(prevState => {
        return [
            ...prevState,
            data
        ]
      });
    }
  }

  return (
    <div>
      <h1>AB TESTING</h1>
      <div>
        <h3>Ganti Entity ID</h3>
        <input type="text" onChange={handleChange}/>
        <button className="border-2 block mt-4 p-4" onClick={handleEvaluate}>Cobaaa</button>
      </div>
      <br />
      <div>
        <h3>Variant History</h3>
        <ol>
          {variants.map((val, idx) => <li key={idx}>{val.date.toISOString()} || {val.id} || {val.entity}</li>)}
        </ol>
      </div>
    </div>
  )
}

export default AbTesting