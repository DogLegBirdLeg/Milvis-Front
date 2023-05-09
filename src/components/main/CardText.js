const Card1Text = () => {
  return (
    <div className="slide-info-el">
      <p>기차, 버스</p>
      <p className='point'>시간표 비교</p>
      <p>번거롭지 않으세요?</p>
      <p>열차와 버스 시간표를 한 번에 조회해보세요.</p>
    </div>
  )
}

const Card2Text = () => {
  return (
    <div className="slide-info-el">
      <p className='point'>밀양시내,</p>
      <p>알려드릴게요</p>
      <p>목적지에서<br />가장 가까운 정류장을 알려드려요.</p>
    </div>
  )
}

const Card3Text = () => {
  return (
    <div className="slide-info-el">
      <p>기존 <span className='point'>버스 시간표</span></p>
      <p>를 찾고 계신가요?</p>
      <p>더 직관적인<br/>시간표를 통해 한 눈에 확인해보세요.</p>
    </div>
  )
}

export {Card1Text, Card2Text, Card3Text};