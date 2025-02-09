# React Hook Form Demo = Personal Note keeping

after configuring the dev Environment , make sure to cd <working folder> and run the comman below:

```bash
npm install react-hook-form
```

- Install React hookform/devtools

```bash
npm install -D @hookform/devtools

```

## \*\* Usage of HookForm & DevTool

After installing import them in your file .tsx

```bash
import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

export const MyForm_Example = () => {
    const form = useForm();
    const {register , control} = form;  here is hwer you register your input names.

     const {name, ref, onChange, onBlur} = register("copy_your_input_name_here eg: firstname");

    return
    <>
    .........
    <input .... id="firstname" name={name} ref ={ref} onChange={onChange} onBlur={onBlur} />

    # at the end of your form element </form> add the follwing code
    <Devtool control = {control}/>;
    </>
}

```

The devtool should be visible on the browser where your have your code runing. Check the top-right-coner of the screen.

- click on expand
  Tourched: means the filed as been interacted with either truel or false
  DIrty: means the filed has no value
  NOw try entering data into the form to see the real time changes
