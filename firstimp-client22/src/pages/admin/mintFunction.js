async function getNftmint(AddressArray, ipfsArray) {
    const TnxGasPrice = async () => {
      await web3.eth.getGasPrice().then(console.log);
      setGasPrice(TnxGasPrice);
    };

    try {
      // let balance = await web3.eth.getBalance(address);

      console.log(gasPrice);
      // console.log(contract);
      if (gasPrice < 1109004931) {
        toast.success(`Gas price under limit${gasPrice}`);
        await contract.methods
          .safeMint(AddressArray, `ipfs://${ipfsArray}`)
          .send({ from: address })
          .on("receipt", function (receipt) {
            console.log(receipt);
            toast.success(`Mint done to add: ${receipt.to}`);
          });
      } else {
        toast.error(`gas price too high${gasPrice}`);
      }

      //console.log(test);
    } catch (err) {
      console.log(err);
      alert("something wents wrong");
    }

  }

  export default getNftmint;