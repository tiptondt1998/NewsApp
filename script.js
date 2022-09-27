getData();

function getData(){
 fetch("https://newsapi.org/v2/everything?q=Apple&from=2022-09-27&sortBy=popularity&apiKey=0945372c9ef74142a11f79f37a970adf").then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
 })
 .catch(function(error){
    alert(error);
 })
}