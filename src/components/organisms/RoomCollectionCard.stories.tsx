import { storiesOf } from "@storybook/react";
import RoomCollectionCard, { ICardProps } from "./RoomCollectionCard";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import React from "react";
import { Grid } from "@material-ui/core";
import { execPath } from "process";

const list: ICardProps[] = [
    { cardName: 'Kitchen', cardImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg', maxWidth: 330, aboutCard: 'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.', },
    { cardName: 'BathRoom', maxWidth: 330, cardImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg', aboutCard: 'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.' },
    { cardName: 'BathRoom', maxWidth: 330, cardImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg', aboutCard: 'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.' },
    { cardName: 'BathRoom', maxWidth: 330, cardImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg', aboutCard: 'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.' },
]
const budgetList: ICardProps[] = [
    {maxWidth: 330, cardName:'Less than $ 20,000', aboutCard: 'I want to keep costs at a minimum for the project.'},
    {maxWidth: 330, cardName:'Less than $ 20,000', aboutCard: 'I want to keep costs at a minimum for the project.',},
    {maxWidth: 330, cardName:'Less than $ 20,000', aboutCard: 'I want to keep costs at a minimum for the project.',},
    {maxWidth: 330, cardName:'Less than $ 20,000', aboutCard: 'I want to keep costs at a minimum for the project.',},
]
storiesOf('Card', module).addDecorator(withKnobs)
    .add('Image and Title Card', () => (
            list[0].cardImage !== undefined ? 
        
            <RoomCollectionCard 
                cardImage={text('imageURL', list[0].cardImage)} 
                cardName={text('name', list[0].cardName)} 
                maxWidth={number('width', list[0].maxWidth)}
            >
            </RoomCollectionCard> : <div/>
    ))
    .add('List of Image and title cards', () => (
        <Grid container direction="row" spacing={1}>{list.map((each: ICardProps, index: number) => (
            <Grid item>
                {each.cardImage !== undefined && <RoomCollectionCard  
maxWidth={number("maxwidth" ,list[index].maxWidth)} cardImage={text('imageURL', each.cardImage)} cardName={text('cardName', list[index].cardName)}></RoomCollectionCard> }
            </Grid>
        ))}</Grid>
    
    ))

    .add('Image title and about card', () => (
        list[0].cardImage !== undefined ? list[0].aboutCard !== undefined ? <RoomCollectionCard 
       

        cardName={text('name', list[0].cardName)} 
        aboutCard={text('about card',list[0].aboutCard)} 
        cardImage={text('imageURL', list[0].cardImage)}  
        maxWidth={number('width', list[0].maxWidth)}>

        </RoomCollectionCard> :<div/>:<div/>
    ))
    .add('List of image+title+about cards', () => (
        <Grid container direction="row" spacing={1}>{list.map((each: ICardProps, index: number) => (
            <Grid item >
                {list[0].cardImage !== undefined && list[0].aboutCard !== undefined && <RoomCollectionCard 
                            

                            aboutCard={text('aboutCard',list[0].aboutCard)} cardImage={text('imageURL', list[0].cardImage)} cardName={text('name', list[0].cardName)} maxWidth={number('width', list[0].maxWidth)}></RoomCollectionCard> 
   }
            </Grid>
        ))}</Grid>
    ))
    .add('Title+About card', () => (
        budgetList[0].aboutCard !== undefined ?  <RoomCollectionCard 
        
        maxWidth={number('maxWidth', budgetList[0].maxWidth)} cardName={text('cardName', budgetList[0].cardName)} aboutCard={text('aboutCard' ,budgetList[0].aboutCard)}></RoomCollectionCard> : <div/>
    ))
    .add('List of title+about cards', () => (
        <Grid container direction="row" spacing={1}>{budgetList.map((each: ICardProps, index: number) => (
            <Grid item>
                {each.aboutCard &&  <RoomCollectionCard 
                            
                            maxWidth={number('maxWidth', each.maxWidth)} cardName={text('cardName' , each.cardName)} aboutCard={text('aboutCard', each.aboutCard)}></RoomCollectionCard> }
            </Grid>
        ))}</Grid>
    ))