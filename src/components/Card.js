// import pokemon from '../assets/demo.png'
import asset from '../assets/asset01.jpg'

const Card = () => {
    // return must have one parent element
    const styles = {
        card: {
            // "min-width": "100px",
            // "max-width": "250px"
            "min-width": "200px",
            "max-width": "250px",
            "margin": "20px"
        },
        img: {
            "margin": "auto",
            "margin-top": "20px",
            "max-width": "100px",
            "max-height": "100px"
        }
    }

    return (
        <div className="card" style={styles.card}>
            <img src={asset} className="img-thumbnail"
                style={styles.img} alt="..." />
            <div className="card-body  text-center">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Card Description</p>
                <a href="#" className="btn btn-primary">Favorite</a>
            </div>
        </div>
    )
}

// Makes it available for import
export default Card;