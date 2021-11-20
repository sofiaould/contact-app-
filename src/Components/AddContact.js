import React from 'react';


class AddContact extends React.Component{
    state= {
        name:"",
        email:"",
    }
    add=(e)=>{
      e.preventDefault();
      if (this.state.email ==="" || this.state.email === ""){
          alert("all this field are mandatory");
          return
      }
      this.props.addContactHandler(this.state);
      this.setState({name:"",email:""})
    };
    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="Name" placeholder="Name" onchange={(e)=>this.setState({name:e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" 
                        name="email" 
                        placeholder="email"
                        value={this.state.email}
                        onChange={(e)=> this.setState({email:e.target.value})}>

                        </input>
                        <button className="ui button blue">Add</button>
                    </div>

                </form>

            </div>
        );
    }

}













export default AddContact;