import { createSlice } from '@reduxjs/toolkit';
import ion from './imgs/players/ion.jpg';
import crosley from './imgs/players/crosley.png';
import audio from './imgs/players/audio.png';
import project from './imgs/players/pro-ject.jpg';

import mbv from './imgs/vinyl/mbv.jpg';
import flowerboy from './imgs/vinyl/flower-boy.jpg';
import parklife from './imgs/vinyl/parklife.png';
import hatfulofhollow from './imgs/vinyl/hatful-of-hollow.jpg';
import changeonebowie from './imgs/vinyl/change-one-bowie.jpg';
import legend from './imgs/vinyl/legend.jpg';
import unknownpleasures from './imgs/vinyl/joy-division-pleasur.jpg';
import animals from './imgs/vinyl/animals.jpg';
import morrisonhotel from './imgs/vinyl/morrison-hotel.jpg';
import closer from './imgs/vinyl/closer.jpg';
import igor from './imgs/vinyl/igor.jpg';

// export const contentVinyl = [
// 	{
// 		name : "m b v",
// 		author : 'My Bloody Valentine',
// 		year : 2013,
// 		price : 179,
// 		genre : 'Rock',
// 		image : mbv,
// 		amount : 10
// 	},
// 	{
// 		name: "Flower Boy",
// 		author : "Tyler, The Creator",
// 		year : 2017,
// 		price : 179,
// 		genre : "Rap & Hip-Hop",
// 		image : flowerboy,
// 		amount : 21
// 	},
// 	{
// 		name : "Parklife",
// 		author : "Blur",
// 		year : 1994,
// 		price : 179,
// 		genre : "Popular",
// 		image : parklife,
// 		amount : 9
// 	},
// 	{
// 		name : "Hatful Of Hollow",
// 		author : "The Smiths",
// 		year : 1984,
// 		price : 149,
// 		genre : "Rock",
// 		image : hatfulofhollow,
// 		amount : 11
// 	},
// 	{
// 		name : "ChangeOneBowie",
// 		author : "David Bowie",
// 		year : 1976,
// 		price : 179,
// 		genre : "Rock",
// 		image : changeonebowie,
// 		amount : 23
// 	},
// 	{
// 		name : "Legend",
// 		author : "Bob Marley & The Wailers",
// 		year : 1984,
// 		price : 129,
// 		genre : "Reggae",
// 		image : legend,
// 		amount : 18
// 	},
// 	{
// 		name : "Unknown Pleasures",
// 		author : "Joy Division",
// 		year : 1979,
// 		price : 169,
// 		genre : "Post-Punk",
// 		image : unknownpleasures,
// 		amount : 19
// 	},
// 	{
// 		name : "Animals",
// 		author : "Pink Floyd",
// 		year : 1977,
// 		price : 129,
// 		genre : "Rock",
// 		image : animals,
// 		amount : 25
// 	},
// 	{
// 		name : "Morrison Hotel",
// 		author : "The Doors",
// 		year : 1970,
// 		price : 149,
// 		genre : "Rock",
// 		image : morrisonhotel,
// 		amount : 24
// 	},
// 	{
// 		name : "Closer",
// 		author : "Joy Division",
// 		year : 1980,
// 		price : 119,
// 		genre : "New Wave",
// 		image : closer,
// 		amount : 17
// 	},
// 	{
// 		name : "Igor",
// 		author : "Tyler, The Creator",
// 		year : 2019,
// 		price : 169,
// 		genre : "Hip-Hop",
// 		image : igor,
// 		amount : 22
// 	},
// ]


// export const contentPlayers = [
//     {
//       name:"Crosley Cruiser Deluxe Black",
//       price:510,
//       amount:48,
//       image: crosley,
//     },
//     {
//       name:"Audio-Technica AT-LP60X Bluetooth",
//       price:1049,
//       amount:23,
//       image: audio,
//     },
//     {
//       name:'ION Mustang LP Red',
//       price:819,
//       amount:19,
//       image: ion,
//     },
//     {
//       name:'Pro-Ject Primary E Phono Black',
//       price:1349,
//       amount:54,
//       image: project,
//     },
//   ];

const initialState = {
	value: [],
};

const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	// Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
	reducers: {
		sortSet: (state, action) => {
			switch (action.payload) {
				case 'name': {
					state.value.sort((a, b) => {
						if (a.name > b.name) {
							return 1;
						}
						if (a.name < b.name) {
							return -1;
						}
						return 0;
					})
					break;
				}
				case 'price': {
					state.value.sort((a, b) => {
						if (a.price > b.price) {
							return -1;
						}
						if (a.price < b.price) {
							return 1;
						}
						return 0;
					})
					break;
				}
				case 'count': {
					state.value.sort((a, b) => {
						if (a.amount > b.amount) {
							return -1;
						}
						if (a.amount < b.amount) {
							return 1;
						}
						return 0;
					})
					break;
				}
				case 'new': {
					state.value.sort((a, b) => {
						if (a.isNew > b.isNew) {
							return -1;
						}
						if (a.isNew < b.isNew) {
							return 1;
						}
						return 0;
					})
					break;
				}
				case 'discount': {
					state.value.sort((a, b) => {
						if (a.discount > b.discount) {
							return -1;
						}
						if (a.discount < b.discount) {
							return 1;
						}
						return 0;
					})
					break;
				}
				default:
					break;
			}
		},
		// catalogTypeSet : (state, action) => {
		// 	if(action.payload === 'vinyl'){
		// 		let res = [];
		// 		for(let i of state.value){
		// 			if(i.catalogType === 'vinyl'){
		// 				res.push(i);
		// 			}
		// 		}
		// 		state.value = res;
		// 	}
		// 	else if(action.payload === 'players'){
		// 		let res = [];
		// 		for(let i of state.value){
		// 			if(i.catalogType === 'players'){
		// 				res.push(i);
		// 			}
		// 		}
		// 		state.value = res;
		// 	}
		// },
		catalogSet: (state, action) => {
			state.value = action.payload;
		}
	}
},
)


export const { sortSet, catalogTypeSet, catalogSet } = catalogSlice.actions;
export default catalogSlice.reducer;
