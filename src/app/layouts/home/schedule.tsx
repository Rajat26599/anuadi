import React from "react"
import Image from "next/image"
import Couple2 from '../../assets/img/couple-vector-2.png'
import Couple3 from '../../assets/img/couple-vector-3.png'
import Garland from '../../assets/img/garland-vector.png'

const Schedule: React.FC = () => {
    const events = [
        {
            name: 'Ring Ceremony',
            date: 'Saturday, 5 Oct. 2024',
            time: '1:00 PM – 2:30 PM',
            venue: '4517 Washington Ave. Manchester, Kentucky 39495',
            icon: Couple2
        },
        {
            name: 'The Wedding',
            date: 'Monday, 17 Feb. 2025',
            time: '1:00 PM – 2:30 PM',
            venue: '4517 Washington Ave. Manchester, Kentucky 39495',
            icon: Couple3
        }
    ]
    return (
        <div className="prose">
            <div className="text-center">
                <h3>Our Wedding</h3>
                <h1>When & Where</h1>
            </div>
            <div className="flex">
                {
                    events.map((event, index) => (
                        <div key={index}>
                            <div>
                                <Image className="absolute" src={Garland} alt='Garland image' />
                                <Image className="absolute z-10" src={event.icon} alt='Couple image' />
                            </div>
                            <h3>{event.name}</h3>
                            <p>{event.date}</p>
                            <p>{event.time}</p>
                            <p>{event.venue}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Schedule