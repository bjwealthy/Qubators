import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();
        
        this.state = {
            sections:  [
                {
                    title: 'wallpapers',
                    imageUrl: 'https://ik.imagekit.io/cyctpb3gf8c/wallpaper/ben-white-qYanN54gIrI-unsplash_VgJmOpKVi.jpg?updatedAt=1627303272129',
                    id: 1,
                    linkUrl: 'wallpaper',
                },
                {
                    title: 'books',
                    imageUrl: 'https://ik.imagekit.io/cyctpb3gf8c/books/books-cover_tkUEL3P6C.jpg?updatedAt=1627303420950',
                    id: 2,
                    linkUrl: 'books',
                },
                {
                    title: 'sermons',
                    imageUrl: 'https://ik.imagekit.io/cyctpb3gf8c/sermons/sermon-cover_KSjuzI9j-.jpg?updatedAt=1627303385920',
                    id: 3,
                    linkUrl: 'sermons',
                },
                {
                    title: 'songs',
                    imageUrl: 'https://ik.imagekit.io/cyctpb3gf8c/songs/songs-cover_qZK9oyDbZG.jpg?updatedAt=1627303780824',
                    id: 4,
                    linkUrl: 'songs',
                    size: 'large',
                },
                {
                    title: 'bible',
                    imageUrl: 'https://ik.imagekit.io/cyctpb3gf8c/bible/bible-cover_hdyA0VKWu.jpg?updatedAt=1627303457940',
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