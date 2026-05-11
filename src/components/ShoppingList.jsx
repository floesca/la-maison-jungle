import { plantList } from '../assets/datas/plantList'
import '../styles/ShoppingList.css'

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
				{plantList.map((plant) => ( // crée une liste des plantes
					<li key={plant.id} className='lmj-plant-item'>
						{plant.isBestSale && <span>🔥 </span>} 
						{plant.name}
						{plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
					</li> 
				))}
			</ul>
		</div>
	)
}

export default ShoppingList