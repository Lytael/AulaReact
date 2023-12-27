import React from 'react'
import Menu from '../components/card/Menu'
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Home } from '@mui/icons-material'

const Inicio = () => {
  return (
    <div>
      <Menu/>
       
      <Button 
      variant= "contained"
      disableElevation
      color='success'
      size='large'
      endIcon={<Home/>}
      
   
      
      
      
      >Clique em mim</Button>

     <TextField label="Digite seu nome" />
   
      <div>Inicio</div>

      <br></br>
      <InputLabel id="label-sexo">Sexo</InputLabel>
      <Select label="Sexo" labelId="label-sexo">    
          <MenuItem>Masculino</MenuItem>
          <MenuItem>Feminino</MenuItem>
       </Select>
    </div>
    
  )
}

export default Inicio