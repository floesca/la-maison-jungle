import { plantList } from '../assets/datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList() {
    const categories = plantList.reduce( // extrait les catégories sans doublons
        (acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
    )

    return (
		<div>
			<ul>
				{categories.map((cat) => ( // crée une liste des catégories
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}	
			</ul>
		</div>
	)
}

export default ShoppingList