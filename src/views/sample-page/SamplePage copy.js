import React, { useRef, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const SamplePage = () => {
  const valueRef = useRef('')
  const dataFieldsRef = useRef([]);
  // const helperText = Array(20).fill("")
  const [errorMessage, setErrorMessage] = useState(Array(20).fill(""));
  const btnClick = () => {
    alert(valueRef.current.value)
    alert(dataFieldsRef.current[1].value);
    alert(dataFieldsRef.current[3].value);
    // helperText[0] = "ABC"
    // errorMessage[0] = "XYZ"
    const tmpData = [...errorMessage];
    tmpData[0] = "Error";
    setErrorMessage(tmpData);
  }

  return (
    <PageContainer title="Sample Page" description="this is Sample page">

      <DashboardCard title="Sample Page">

        <Typography>This is a sample page</Typography>
        {/* <TextField
            id='outlined-textarea'
            label='Content'
            placeholder='Write your thoughts'
            defaultValue={"123"}
            // value={"1234"}
            error={errorMessage[0] !== ""}
            helperText={errorMessage[0]}
            variant='outlined'
            inputRef={valueRef}   //connecting inputRef property of TextField to the valueRef
            />
        <TextField
            id='outlined-textarea'
            label='Content'
            placeholder='Write your thoughts'
            defaultValue={"123"}
            // value={"1234"}
            error={errorMessage[1] !== ""}
            helperText={errorMessage[1]}
            variant='outlined'
            inputRef={el => dataFieldsRef.current[1] = el} 
            // inputRef={dataFieldsRef[1]}
            //connecting inputRef property of TextField to the valueRef
            />
        <TextField
            id='outlined-textarea'
            label='Content'
            placeholder='Write your thoughts'
            defaultValue={"123"}
            // value={"1234"}
            error={errorMessage[1] !== ""}
            helperText={errorMessage[1]}
            variant='outlined'
            inputRef={el => dataFieldsRef.current[3] = el} 
               //connecting inputRef property of TextField to the valueRef
            />
            <Button onClick={btnClick}>click</Button> */}
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
