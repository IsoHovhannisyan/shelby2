import '../css/maintours.css';

export function MainTours({ mainTours, homePageLabel }) {
    return (
      <div>

        <h2 className='whiteHeading'>{homePageLabel[0]?.label}</h2>
        <div className='MainTours'>
            <div className='container'>
                {
                    mainTours.map(el => (
                        <div className='item' key={el.id}>
                            <img src={`https://shelby-backend-services.vercel.app/${el.image}`} alt='mainTours' />

                            <div className='content'>
                                <h3>{el.title}</h3>
                                <p>{el.descr}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    )
}
