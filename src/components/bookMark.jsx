const BookMark = ({ onToggleBookMark, _id, bookmark }) => {
  const getClassFromStatus = () => {
    return 'bi bi-bookmark' + (bookmark ? '-fill' : '');
  };

  return (
    <i className={getClassFromStatus()} 
    onClick={() => onToggleBookMark(_id)}></i>
  );
};


export default BookMark;
