import { jsPDF } from "jspdf";
import { useState } from 'react'
import { Button, Input } from '@material-tailwind/react'

export default function Home () {
  const initialValue = {
    name: '',
    estadoCivil: '',
    idade: '',
    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
    telefone: '',
    celular: '',
    linkedin: '',
    github: '',
    objetivo: '',
    formacao: '',
    experiencia: '',
    conhecimentos: '',
    idiomas: '',
    cursos: '',
    informacoesAdicionais: '',
  }

  const [values, setValues] = useState(initialValue)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleReset = () => {
    setValues(initialValue)
  }
  

  const handlePrint = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    //create a new jsPDF instance and set the page size to A4 curriculum
    doc.setFontSize(24)
    doc.text(55, 20, values.name)
    doc.setFontSize(12)
    doc.text(20, 30, 'Estado Civil: ' + values.estadoCivil + ' | Idade: ' + values.idade + ' | CEP: ' + values.cep)
    doc.text(20, 35, 'Celular: ' + values.celular)
    doc.text(20, 40, 'Telefone: ' + values.telefone)
    doc.text(20, 45, 'Endereço: ' + values.endereco + ' | Bairro: ' + values.bairro + ' | Cidade: ' + values.cidade + ' | Estado: ' + values.estado)

    doc.text(20, 50, 'LinkedIn: ' + "https://www.linkedin.com/in/" + values.linkedin)
    doc.text(20, 55, 'GitHub: ' + "https://github.com/" + values.github)

    doc.setFontSize(18)
    doc.text(20, 65, 'Objetivo: ')
    doc.setFontSize(12)
    doc.text(20, 70, values.objetivo)

    
    doc.setFontSize(18)
    doc.text(20, 85, 'Formação: ')
    doc.setFontSize(12)
    doc.text(20, 90, values.formacao)

    doc.setFontSize(18)
    doc.text(20, 105, 'Experiência: ')
    doc.setFontSize(12)
    doc.text(20, 110, values.experiencia)

    doc.setFontSize(18)
    doc.text(20, 125, 'Conhecimentos: ')

    doc.setFontSize(12)
    doc.text(20, 130, values.conhecimentos)

    doc.setFontSize(18)
    doc.text(20, 145, 'Idiomas: ')
    doc.setFontSize(12)
    doc.text(20, 150, values.idiomas)

    doc.setFontSize(18)
    doc.text(20, 175, 'Cursos: ')
    doc.setFontSize(12)
    doc.text(20, 180, values.cursos)

    doc.setFontSize(18)
    doc.text(20, 195, 'Informações Adicionais: ')
    doc.setFontSize(12)
    doc.text(20, 200, values.informacoesAdicionais)


    doc.save('curriculum.pdf')
  }

  const moreCurse = () => {
    setValues({ ...values, cursos: values.cursos + ' | ' })
  }
  const moreLang = () => {
    setValues({ ...values, idiomas: values.idiomas + ' | ' })
  }


  return (
    <div className="w-full">
      <h1 className="text-center text-3xl bold text-blue-gray-900 pt-10">Gerador de Currículo</h1>
      <p className="text-center text-sm"> Preencha os campos abaixo e clique em Download PDF para gerar seu currículo.</p>
      <div className="w-72 mx-auto mt-10 flex gap-2 items-start justify-center">
      <div className="flex flex-col gap-2">
      <Input
          label="Nome"
          type="text"

          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Estado Civil"
          name="estadoCivil"
          value={values.estadoCivil}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Idade"
          name="idade"
          value={values.idade}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Endereço"
          name="endereco"
          value={values.endereco}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Bairro"
          name="bairro"
          value={values.bairro}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Cidade"
          name="cidade"
          value={values.cidade}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Estado"
          name="estado"
          value={values.estado}
          onChange={handleChange}
        />
        <Input
          type="number"
          label="CEP"
          name="cep"
          value={values.cep}
          onChange={handleChange}
        />
        <Input
          type="number"
          label="Telefone"
          name="telefone"
          value={values.telefone}
          onChange={handleChange}
        />
        <Input
          type="number"
          label="Celular"
          name="celular"
          value={values.celular}
          onChange={handleChange}
        />
      </div>
       <div className="flex flex-col gap-2">
       <Input
          type="text"
          label="Linkedin"
          name="linkedin"
          value={values.linkedin}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Github"
          name="github"
          value={values.github}
          onChange={handleChange}
        />
        <Input
          type="textfield"
          label="Objetivo"
          name="objetivo"
          value={values.objetivo}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Formação"
          name="formacao"
          value={values.formacao}
          onChange={handleChange}
        />
        <Input
          type="textfield"
          label="Experiência"
          name="experiencia"
          value={values.experiencia}
          onChange={handleChange}
        />
        <Input
          type="textfield"
          label="Conhecimentos"
          name="conhecimentos"
          value={values.conhecimentos}
          onChange={handleChange}
        />
        <div className="flex gap-1">
        <Input
          type="text"
          label="Idiomas"
          name="idiomas"
          value={values.idiomas}
          onChange={handleChange}
        />
        <Button onClick={moreLang}>+</Button>
        </div>
       
       <div className="flex gap-1">
       <Input
          type="text"
          label="Cursos"
          name="cursos"
          value={values.cursos}
          onChange={handleChange}
        />
        <Button onClick={moreCurse}>+</Button>
       </div>
        <Input
          type="textfield"
          label="Informações Adicionais"
          name="informacoesAdicionais"
          value={values.informacoesAdicionais}
          onChange={handleChange}
        />
       </div>
       
       </div>
       <div className="flex gap-2 items-center justify-center pt-10">
          <Button onClick={handleReset}>Limpar</Button>
          <Button onClick={handlePrint}>Download PDF</Button>
          </div>
    </div>
  );

}