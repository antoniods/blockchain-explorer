'use strict';



    const e = React.createElement;
    
    class LikeButton extends React.Component {
      constructor(props) {
        super(props);
        this.state = { data: null };
        this.fetcher = this.fetcher.bind(this)
      }
      componentDidMount(){
        document.getElementById("search-block").addEventListener("click",()=>{
          var bar = document.getElementById("search-bar").value
          var prefix = "api/v1/blocks/"
          this.fetcher(prefix+bar)
        })
        document.getElementById("search-tx").addEventListener("click",()=>{
          var bar = document.getElementById("search-bar").value
          var prefix = "api/v1/transactions/"
          this.fetcher(prefix+bar)
        })
        document.getElementById("search-account").addEventListener("click",()=>{
          var bar = document.getElementById("search-bar").value
          var prefix = "api/v1/accounts/"
          this.fetcher(prefix+bar)
        })
      }
      render() {
        return this.state.data
      }

      fetcher(s){
        fetch('https://mainnet.blockchainos.org/'+s)
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          console.log(myJson);
          this.setState({ data: JSON.stringify(myJson) })
        });
      }
    }
    
    const domContainer = document.querySelector('#react-zone');
    ReactDOM.render(e(LikeButton), domContainer);