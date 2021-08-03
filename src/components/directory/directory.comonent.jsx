import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();
        
        this.state = {
            sections:  [
                {
                    title: 'rhapsodies',
                    imageUrl: 'https://ik.imagekit.io/cyctpb3gf8c/wallpaper/rhapsody_R-zYh-j-yQx.jpg?updatedAt=1627890107978',
                    id: 1,
                    linkUrl: 'wallpaper',
                },
                {
                    title: 'teevo',
                    imageUrl: 'https://ik.imagekit.io/cyctpb3gf8c/teevo-cover_dr5MFWOFhjQ.jpg?updatedAt=1627978116309',
                    id: 2,
                    linkUrl: 'books',
                },
                {
                    title: 'early reader',
                    imageUrl: 'https://ik.imagekit.io/cyctpb3gf8c/earlyreader_UFrlwsJIDh.webp?updatedAt=1627978115665',
                    id: 3,
                    linkUrl: 'earlyreader',
                },
                {
                    title: 'read to me',
                    imageUrl: 'https://ik.imagekit.io/cyctpb3gf8c/readtome_VCLYKtTbi.jpg?updatedAt=1627978115627',
                    id: 4,
                    linkUrl: 'readtome',
                    size: 'large',
                },
                {
                    title: 'messages',
                    imageUrl: 'https://ik.imagekit.io/cyctpb3gf8c/messages_UaFzjsuWKq.jpg?updatedAt=1627978249002',
                    id: 5,
                    linkUrl: 'bible',
                    size: 'large',
                },
            ]
        }   
    }
    render(){
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} /> 
                ))}
            </div>
        )
    }
}

export default Directory;