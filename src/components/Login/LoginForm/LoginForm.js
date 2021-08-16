import React from 'react';
import classes from './LoginForm.module.scss';
import { useForm } from 'react-hook-form';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { AiOutlineWarning } from 'react-icons/ai';

const LoginForm = ({ loginHandle, error }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const onSubmit = (data) => {
    loginHandle(data.email, data.password, data.rememberMe);
  };

  return (
    <form className={classes.LoginForm} onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input
        name="email"
        type="email"
        label="E-mail*"
        placeholder="example@gmail.com"
        register={register}
        options={{
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        }}
        errorMessage={errors.email && 'Enter a correct e-mail address'}
      />
      <Input
        name="password"
        type="password"
        label="Password*"
        register={register}
        options={{ required: true, minLength: 8 }}
        errorMessage={errors.password && 'Min length has 8 chars'}
      />

      <div>
        <label>
          <input type="checkbox" {...register('rememberMe')} />
          <span>Remember me</span>
        </label>
      </div>
      {error && (
        <div className={classes.SummaryError}>
          <AiOutlineWarning />
          {error}
        </div>
      )}

      <Button type="submit" kind="primary">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
