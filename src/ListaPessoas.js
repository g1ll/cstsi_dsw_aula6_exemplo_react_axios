import React, {useState,useEffect} from 'react'
import PessoaIMC from './PessoaIMC'
import Axios from 'axios'

function ListPessoas(){
    const [list,setList] = useState([])
    // const url = "http://localhost/2019/tsi/dsw/imcApi/consulta.php";
    const url = "http://g1ll.000webhostapp.com/ajaxphp/consulta.php";
    useEffect(()=>{
        const fetchData = async()=>{
            const resp = await Axios.get(url)
            setList(resp.data);
            console.log(resp.data);
        }
        fetchData();
    },[]);

    return (
        <>
        {list.length>0?(<h1>IMCs Cadastrados</h1>):('')}
        {list.length>0?(list.map(pessoa=><PessoaIMC pessoa={pessoa}/>)
        ):(<h3>Carregando...!</h3>)}
        </>
    );
}

export default ListPessoas;