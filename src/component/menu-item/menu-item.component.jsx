import React from 'react'

const MenuItem = ({title, subtitle}) => (
    <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> {title}</h1>
                    <span className='subtitle'>{subtitle}</span>
                </div>
            </div>
)

export MenuItem;