import css from './styles.module.css';

export const Button = ({ onClick, type = 'submit', children }) => {
  return (
    <div className={css.button_wrapper}>
      <button onClick={onClick} type={type} className={css.button}>
        Load more
        {children}
      </button>
    </div>
  );
};
