import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function AlertDialog() {
    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };


    return (

        <><div className="header" style={{ display: "flex", justifyContent: "center", padding: "15px", alignItems: "center" }}>
            <div style={{ fontFamily: "WorkSans", fontSize: "14px", color: "#494747" }}>VAI AL DETTAGLIO&nbsp;&nbsp;</div>

            <React.Fragment>
                <Button
                    onClick={handleClickOpen1}
                    style={{ border: "1px solid #000000", fontFamily: "WorkSans", color: "#494747" }}
                >
                    TUVALU
                </Button>
                <Dialog
                    hideBackdrop
                    open={open1}
                    onClose={handleClose1}
                    PaperProps={{
                        sx: {
                            width: "100%",
                            maxWidth: "100%",
                            height: "100%",
                            maxHeight: "80%",
                            backgroundColor: "#f0ede6",
                            boxShadow: "none",
                            border: "1px solid #6e6d6d"
                        },
                    }}
                >
                    <div>

                        <button onClick={handleClose1}
                            style={{ maxWidth: "20px", maxHeight: "20px", border: "unset", float: "right", padding: "5px", cursor: "pointer", background: "transparent", fontWeight: "bold" }}
                        >X</button>

                        <h1>TUVALU</h1>
                    </div>
                </Dialog>
            </React.Fragment>





            <React.Fragment>
                <Button
                    onClick={handleClickOpen2}
                    style={{ border: "1px solid #000000", fontFamily: "WorkSans", color: "#494747" }}
                >
                    PALAU
                </Button>
                <Dialog
                    hideBackdrop
                    open={open2}
                    onClose={handleClose2}
                    PaperProps={{
                        sx: {
                            width: "100%",
                            maxWidth: "100%",
                            height: "100%",
                            maxHeight: "80%",
                            backgroundColor: "#f0ede6",
                            boxShadow: "none",
                            border: "1px solid #6e6d6d"
                        },
                    }}
                >
                    <div>

                        <button onClick={handleClose2}
                            style={{ maxWidth: "20px", maxHeight: "20px", border: "unset", float: "right", padding: "5px", cursor: "pointer", background: "transparent", fontWeight: "bold" }}
                        >X</button>

                        <h1>PALAU</h1>
                    </div>
                </Dialog>
            </React.Fragment>


        </div>


            <div className="header" style={{ display: "flex", justifyContent: "center", paddingTop: "5px" }}>
                <div className="title" style={{ width: "70vw", padding: "50px", paddingTop: "80px" }}>
                    <h4>Qui ci potrebbe essere la narrativa, con corpo centrale come fosse un articolo. Esempio: However, the overall stagnation in the representation of female graduate students in science and engineering shrouds a more complicated picture underneath.</h4>
                    <h4>Some fields have seen a large increase in the representation of female graduate students. From 2003 to 2016, mathematics and statistics quickly reached and maintained sex parity.</h4>
                </div>
            </div></>

    );
}