/* eslint-disable no-empty */


function LogoutLink(props: { children: React.ReactNode }) {

    


    const handleSubmit = (e: React.FormEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        fetch("/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: ""

        })
            .then((data) => {
                if (data.ok) {

                    window.location.href = "/HomePage";
                }
                else { }


            })
            .catch((error) => {
                console.error(error);
            })

    };

    return (
        <>
            <a href="#" onClick={handleSubmit}>{props.children}</a>
        </>
    );
}

export default LogoutLink;