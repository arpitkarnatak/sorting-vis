const ms = 30

const sleep =  () => {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }


export default sleep