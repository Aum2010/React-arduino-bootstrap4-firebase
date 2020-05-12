import config from './Config'
import Firebase from 'firebase'
import React from 'react'

class FirebaseList extends React.Component {


   

    constructor(props){
        super(props)
        // Firebase.initializeApp(Config.firebase)
        if (!Firebase.apps.length) {
            Firebase.initializeApp(config);
         }
        this.state = {
            ValueIR : 0,
            ValuePoten1 : 0,
            ValuePoten2 : 0,
            ValueTurbi : 0,
            
        }
        
        

        
    }

    componentDidMount() {
        this.i = setInterval(() => {
            var ref = Firebase.database().ref()
    // ref.once('value' , snap => {
    //    var value = snap.val() ? snap.val() : {}
       
    //     value = Array.from(value)
    //     console.log(value)
        
        
    //    this.setState(({Value : value}))
    // })

     ref.once('value')
        .then( (snap) => snap.val() ? snap.val() : { } )
        .then( (data) => this.setState({

            ValueIR : data.IR,
            ValuePoten1 : data.Poten1,
            ValuePoten2 : data.Poten2,
            ValueTurbi : data.Turbi,

        }))
        
        
        
        
        //.then( (data) =>  this.setState({ ValueIR : data.IR })  )
        //.then( (data) =>  ( {data,...data.IR} ) )
        //.then( (data) => data.map( console.log(data)) )
        //.then( (data) => { this.setState({ ValuePoten2 : data.Poten2 }) } )
        //.then( (data) => { this.setState({ ValueTurbi : data.Turbi }) } )
        .catch ( (err) => console.log(err) )
        

        },2000);
        
    }

    componentWillMount() {
        clearInterval(this.i)
    }

  

    render () {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                                
                                <div class="shadow p-3 mb-5 bg-white rounded" style={{ width : '18rem' }}>
                                <img src="https://image.flaticon.com/icons/svg/2730/2730287.svg"  height="200" className="card-img-top mb-3" alt="..." ></img>
                                    <div className="card-body bg-secondary shadow">
                                        <h5 className="card-title text-light">Infrared Sensor</h5>
                                        <h1 className="text-light">{`${this.state.ValueIR}`}</h1>
                                        
                                    </div>
                            </div>

                        </div>
                        <div className="col">
                            
                            <div class="shadow p-3 mb-5 bg-white rounded" style={{ width : '18rem' }}>
                                <img src="https://image.flaticon.com/icons/svg/2597/2597799.svg"  height="200"  className="card-img-top mb-3" alt="..." ></img>
                                    <div className="card-body bg-secondary shadow">
                                        <h5 className="card-title text-light">Potentiometer 1</h5>
                                        <h1 className="text-light">{`${this.state.ValuePoten1}`}</h1>
                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="shadow p-3 mb-5 bg-white rounded" style={{ width : '18rem' }}>
                                    <img src="https://image.flaticon.com/icons/svg/2597/2597799.svg"  height="200"  className="card-img-top mb-3" alt="..." ></img>
                                        <div className="card-body bg-secondary shadow">
                                            <h5 className="card-title text-light">Potentiometer 2</h5>
                                            <h1 className="text-light">{`${this.state.ValuePoten2}`}</h1>
                                            
                                        </div>
                            </div>
                        </div>
                        <div className="col">
                        <div class="shadow p-3 mb-5 bg-white rounded" style={{ width : '18rem' }}>
                                    <img src="https://image.flaticon.com/icons/svg/702/702461.svg"  height="200"  className="card-img-top mb-3" alt="..." ></img>
                                        <div className="card-body bg-secondary shadow">
                                            <h5 class="card-title text-light">Turbidity Sensor</h5>
                                            <h1 className="text-light">{`${this.state.ValueTurbi}`}</h1>
                                            
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                    
                    
                    
                    

            </div>
        )
    }
}

    // function getUserData () {
    //     var ref = Firebase.database().ref('Poten1')
    //     ref.on('value' , snap => {
    //     const value = snap.val() ? snap.val() : { }
    //     this.setState((s,p) => ({Value : s.value}))
    //     })

        
        
    // }

export default FirebaseList