import { useEffect } from 'react';

const MockSamples = () => {
  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then(console.log);
    fetch('/api/products')
      .then((res) => res.json())
      .then(console.log);
    fetch('/api/coupons')
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return <div> (MockSample) console.log 를 확인하세요. </div>;
};

export default MockSamples;
