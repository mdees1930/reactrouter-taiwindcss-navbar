@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Poppins&display=swap');



*{
    box-sizing: border-box;
}


html, body {
    margin: 0;
    padding: 0;
}

body{
    background-color: #eec6e1;
    height: 1500px;
}


.nav{
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    justify-content: space-between;
    margin: 0;
    align-items: center;
    background: linear-gradient(to top, white,rgb(223, 6, 205));
}

.logo{
    display: flex;
    justify-content: space-around;
    /* border: 2px solid red; */
    width: 16%;
    align-items: center;
}

 
.img-logo{
    display: flex;
    width: 60px;
    height: 60px;
    padding: 5px;
    /* border: 2px solid yellow; */
}

.span-logo{
    font-family: "Lobster", 'Courier New', Courier, monospace;
    font-size: 35px;
    width: 100%;
    padding-left: 5px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    /* border: 2px solid brown; */
}

.span-logo:hover{
    color: blueviolet;
    
}

.menu{
    text-decoration: none;
    list-style: none;
    display: flex;
    
}

.menu > li{
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    padding: 0 20px;
    font-size: 18px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    list-style: none;
}


.menu > li > a {
    list-style: none;
    text-decoration: none;
    color: white;
    
}

.menu > li > a:hover{
    background: linear-gradient(to bottom, white,rgb(223, 6, 205));
    color: black;
    cursor: pointer;
    padding: 0 2px;
    transition: .3s; 
    border-radius: 5px;
   
}

.content{
    background-image: url('./react-logo.png');
    background-repeat: no-repeat;
    /* background-position: right 75%; */
    background-position-x: calc(130%);
    background-position-y: calc(130%);
    /* background-size: 35%; */
    display: flex;
    position: relative;
    flex-direction: column;
    font-family: "Inter", Arial, Helvetica, sans-serif;
    font-size: 15px;
    color: black;
    line-height: 25px;
    padding: 0 5px;
    text-align: justify;
    text-justify: auto;
}

.content1{
    display: flex;
    flex-direction: column;
    margin: 60px 5px;
}

.content2{
    display: flex;
    flex-direction: column;
    margin: 10px 5px;
}


.content2 ul li::marker {
    color: rgb(23, 233, 16);
    font-weight: bold;
    font-size: 1.2em;
}


.footer{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    background: linear-gradient(to bottom, white,rgb(223, 6, 205));

}


