const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
			apiUrl: "https://playground.4geeks.com/contact",
			user: "anibal"
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			infContact: async () => {
				const store = getStore()
				try {
					const response = await fetch(`${store.apiUrl}/agendas/${store.user}`)
					const data = await response.json()
					console.log(data)
					setStore({ contacts: data.contacts })
				} catch (error) {
					console.error(error)
				}
			},
			addContact: async (contacts) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/anibal/contacts", {
						method: "POST",
						body: JSON.stringify(contacts),
						headers: {
							"Content-Type": "application/json"
						}
					})
					if (response.ok) {
						const data = await response.json();
						console.log(data);
						alert('Contacto agregado exitosamente');
					}

				} catch (error) {
					console.log(error)
				}
			},
			editarContacto: async (editContact, id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/anibal/contacts/${id}`, {
						method: "PUT",
						body: JSON.stringify(editContact),
						headers: {
							"Content-Type": "application/json"
						}
					})
					const data = response.json
					console.log(data)
					if (response.ok) {
						return true
					}
				} catch (error) {
					console.error(error)
				}
			},
			borrarContacto: async (id) => {
				const store = getStore()
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/anibal/contacts/${id}`, {
						method: "DELETE",
						body: JSON.stringify(id),
						headers: {
							"Content-Type": "application/json"
						}
					})
				} catch (error) {
					console.error(error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
