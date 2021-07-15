import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();
        
        this.state = {
            sections:  [
                {
                    title: 'aircon',
                    imageUrl: 'https://ik.imagekit.io/cyctpb3gf8c/aircon/nokia_air_conditioner_image_flipkart_1608556296721_UAohagnQYa.webp',
                    id: 1
                },
                {
                    title: 'refrigerators',
                    imageUrl: 'https://ik.imagekit.io/cyctpb3gf8c/refrigerators/best-fridges-2019-1569421093_Y0ea8cxXQ.png',
                    id: 2
                },
                {
                    title: 'tv',
                    imageUrl: 'https://ik.imagekit.io/cyctpb3gf8c/tv/17-19-32-Inch-TV-Set-3D-Smart-LCD-Screen-Digital-Color-Plasma-HD-LCD-LED-TV_ffwD668MOS.jpg',
                    id: 3
                },
                {
                    title: 'guitar',
                    imageUrl: 'https://ik.imagekit.io/cyctpb3gf8c/guitar/images__3__TBXN1LJ6_.jpeg',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'piano',
                    imageUrl: 'https://ik.imagekit.io/cyctpb3gf8c/piano/15612050_800_Jj3-xnEfyp.jpg',
                    size: 'large',
                    id: 5
                },
            ]
        }   
    }
    render(){
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl, id, size}) => (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/> ))}
            </div>
        )
    }
}

export default Directory;