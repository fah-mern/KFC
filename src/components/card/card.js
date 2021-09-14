function  Card(props){
    const p=props.product;
    return(
        <div className='col-md-4 mt-3'>
        <div className="card">
  <img src="/images/e1.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{p.title}</h5>
    <p className="card-text">{p.description}</p>
    <a href="#" className="btn btn-danger">{p.price}</a>
    <a href="#" className="btn btn-warning">Add to Bucket</a>
  </div>
</div>
</div>
    )
}

export default Card;