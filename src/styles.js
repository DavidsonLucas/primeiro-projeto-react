import styled from "styled-components";
import { FcEmptyTrash, FcCheckmark, FcAcceptDatabase  } from "react-icons/fc";

export const Container = styled.div`
   background :linear-gradient(90deg, #383838 0%, #000000 81.25%  );
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100vw;
   height: 100vh;
   
`
export const TodaALista = styled.div`
    width: 541px;
    height: 498px;
    background: #FFFFFF;
    border-radius: 30px;
    padding: 20px 10px;
    border: none;
    box-shadow:  2px  2px  20px  rgba( 75  ,  233  , 241 , .7 );
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden; 
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track{
        background: transparent;
    }

    @media (max-width:730px){
    &{
        max-width: 90%;
        
    }
   } 
   
`
export const Space1 = styled.div`
    display: flex;
    gap: 18px;
    margin-bottom: 60px;
`

export const Input = styled.input`
    border: 2px solid rgba(200, 211, 212, 0.4);
    border-radius: 5px;
    height:40px;
    width:342px;
    padding: 10px;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;

    @media (max-width:730px){
    &{
        max-width: 180px;
        
    }
   } 
`

export const Button = styled.button`
    height: 40px;
    width: 130px;
    background-color: #8052EC;
    border-radius: 5px;
    color: #FFFFFF;
    border: none;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    cursor: pointer;

    &:hover{
        background-color: #b59af4; 
    }
    &:active{
        opacity: .5;
    }

    @media (max-width:730px){
    &{
        max-width: 90px;
        
    }
   } 
`

export const Space2 = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
    width: 98%;

   ul{
    margin-bottom: 30px;
   }

  
    
`
export const Space4 = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left:35px ;

    
   h3{
   color:#8ea5f1;
  }

  h3:hover{
    color:#a9baf4 ;
  }
  @media (max-width:730px){
    h3{
        font-size:12px ;
    }
   } 

`



export const Space3 = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    background: ${(props) => props.isFiniched ? '#E8FF8B' : '#E4E4E4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    margin-bottom: 30px;
    padding:  0 10px;
    

    li{
        list-style: none;
    
    }

  
`
export const Trach = styled(FcEmptyTrash)`
    cursor: pointer;
    
`

export const Chak = styled(FcCheckmark)`
    cursor: pointer;
`
export const Baise = styled(FcAcceptDatabase)`
        cursor: pointer;
        &:hover{
            background-color: red;
        }
        
`


 
