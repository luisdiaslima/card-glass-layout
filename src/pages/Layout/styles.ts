import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 20px;

    display: grid;
    grid-auto-rows: minmax(120px, auto);
    grid-template-areas:
    "landing card"
    "form card";
    grid-gap: 1em;

   > h1 {
       font-size: 80px;
        background: linear-gradient(145deg, #7F7FD5, #86A8E7, #91EAE4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

   > div {
        padding: 35px;
        color: white;
    }

    .landing { 
        grid-area: "landing";

         h1 {
            font-size: 6rem;
        }
        
        h3 {
            font-size: 4rem;
            margin-bottom: 15rem;

            /* background: linear-gradient(145deg, #72f, #c1b); */
            background: linear-gradient(5deg, #11998e, #38ef7d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        span {
            font-size: 1.8rem;

        }
    }

    .card { 
        grid-area: "card";
        grid-column: card;

        .circle {
            position: fixed; 

            border-radius: 50%;
            /* background: linear-gradient(145deg, #72f, #c1b); */
            background: linear-gradient(145deg, #11998e, #38ef7d);


        }

        .circles {
            position: fixed;
            height: 270px;
            width: 450px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .circle-1 {
            height: 250px;
            width: 250px;
            top: -50px;
            left: 190px;
        }
        .circle-2 {
            height: 400px;
            width: 400px;
            bottom: -90px;
            top: -350px;
            left: 650px;
            opacity: 0.8;

        }

        .credit-card {
        
            display: grid;
            grid-template-rows: repeat(4, 1fr);

            padding: 15px;
            margin-top: 50px;
            transform: rotate(5deg);
            background-color: rgba(255, 255, 255, .15);  
            backdrop-filter: blur(3px);
            
            height: 250px;
            width: 500px;
            border-radius: 25px;
            
            > img {
                margin-right: 10px;
               width: 50px;
               height: 30px;
            }

            #numbers {
                letter-spacing: 3px;
                word-spacing: 30px;
            }

            .bottom-card {
                display: flex;
                justify-content: space-between;
            }

            .valid-thru {
                display: flex;
                flex-direction: column;
            }
        }
    }

    .form { 
        grid-area: "form";

        > form {
            display: grid;


            grid-auto-rows: minmax(50px, auto);
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 2.5rem;

            input {
                height: 40px;

                border: none;
                background: #4f4f4f;
                border-radius: 8px;
            }

            label {
                margin-bottom: 5px;
            }

            .card-number {
                display: flex;
                flex-direction: column;
            }

            .validate {
                display: flex;
                flex-direction: column;

                > input {
                    width: 175px;
                }
            }

            .name {
                display: flex;
                flex-direction: column;
            }

            .cvv {
                display: flex;
                flex-direction: column;

                .input-button {
                    display: flex;
                    align-items: center;
                    flex-direction: row;

                    > input {
                        width: 100px;
                    }

                    > button {
                        display: flex;
                        border: none;
                        margin-left: 80px;

                        align-items: center;
                        justify-content: center;
                        justify-content: center;

                        width: 135px;
                        height: 50px;
                        cursor: pointer;

                        color: white;
                        font-weight: 600;

                        border-radius: 18px;
                        /* background: linear-gradient(145deg, #72f, #c1b); */
                        background: linear-gradient(145deg, #11998e, #38ef7d);
                    }
                }
               
            }
        }
    }

    @media(max-width: 414px) {
    grid-template-areas:
      "landing"
      "card"
      "form";
      grid-auto-rows: minmax(200px, auto);
      grid-gap: 5em;

      .landing h3 {
          margin-bottom: 0px;
      }

      .form form {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 8px;
      }

     .circles {
        display: none;
      }

      .card .credit-card {
        transform: rotate(0deg);
        margin-top: 0;
      }
  }

`;