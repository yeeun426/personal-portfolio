import { useEffect, useState } from 'react';
import '../../pages/Portfolio/styled.css';

const HostSlider = ({ id }) => {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);
  //data를 배열로 선언

  useEffect(() => {
    fetch('/data/behost.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.details);
      });

    data.map((item) => {
      if (id === item.id) setDetail(item);
    });
  }, []);

  return (
    <>
      <div className='img-detail'>{detail.detail}</div>
      <img className='img-detail-sign' src={detail.sign} alt='' />
      <div className='img-detail-country'>{detail.country}</div>
    </>
  );
};
export default HostSlider;
