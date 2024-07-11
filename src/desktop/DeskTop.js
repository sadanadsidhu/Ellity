// import React, { useState } from "react";
// import "./desktop.css";
// const DeskTop = () => {
//   const [checkedItems, setCheckedItems] = useState({
//     checkbox1: false,
//     checkbox2: false,
//     checkbox3: false,
//     checkbox4: false,
//     checkbox5: false,
//     checkbox6: false,
//   });

//   const handleChange = (event) => {
//     const { name, checked } = event.target;
//     setCheckedItems((prevState) => ({
//       ...prevState,
//       [name]: checked,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Checked items:", checkedItems);
//   };

//   return (
//     <div className="main-class-form">
//       <form onSubmit={handleSubmit}>
//         <label>
//           <input
//             type="checkbox"
//             name="checkbox1"
//             checked={checkedItems.checkbox1}
//             onChange={handleChange}
//           />
//         </label>
//         <div className="all-pages-box">
//             <div className="all-pages">
//         <label>
//           <span>Left all pages</span>
//           </div>
//           <div className="second-check-box">
//           <input
//             type="checkbox"
//             // name={}
//             // checked={checkedItems[checkbox]}
//             onChange={handleChange}
//           />

//         </div>
//         </div>
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             name="checkbox2"
//             checked={checkedItems.checkbox2}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             name="checkbox3"
//             checked={checkedItems.checkbox3}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             name="checkbox4"
//             checked={checkedItems.checkbox4}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             name="checkbox5"
//             checked={checkedItems.checkbox5}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             name="checkbox6"
//             checked={checkedItems.checkbox6}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Done</button>
//       </form>
//     </div>
//   );
// };

// export default DeskTop;
// import React, { useState } from "react";
// import "./desktop.css";

// const DeskTop = () => {
//   const [checkedItems, setCheckedItems] = useState({
//     checkbox1: false,
//     checkbox2: false,
//     checkbox3: false,
//     checkbox4: false,
//     checkbox5: false,
//     checkbox6: false,
//   });

//   const handleChange = (event) => {
//     const { name, checked } = event.target;
//     setCheckedItems((prevState) => ({
//       ...prevState,
//       [name]: checked,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Checked items:", checkedItems);
//   };

//   return (
//     <div className="main-class-form">
//       <form onSubmit={handleSubmit}>
//         {Object.keys(checkedItems).map((checkbox) => (
//           <div key={checkbox} className="checkbox-row">
//             <input
//               type="checkbox"
//               name={checkbox}
//               checked={checkedItems[checkbox]}
//               onChange={handleChange}
//             />
//             <div className="all-pages-box">
//               <div className="all-pages">
//                 <span>Left all pages</span>
//               </div>
//               <div className="second-check-box">
//                 <input
//                   type="checkbox"
//                   name={`${checkbox}_second`}
//                   checked={checkedItems[`${checkbox}_second`]}
//                   onChange={(event) => {
//                     const { name, checked } = event.target;
//                     setCheckedItems((prevState) => ({
//                       ...prevState,
//                       [name]: checked,
//                     }));
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//         <button type="submit">Done</button>
//       </form>
//     </div>
//   );
// };

// export default DeskTop;
// import React, { useState } from "react";
// import "./desktop.css";

// const DeskTop = () => {
//   const [checkedItems, setCheckedItems] = useState({
//     checkbox1: false,
//     checkbox2: false,
//     checkbox3: false,
//     checkbox4: false,
//     checkbox5: false,
//     checkbox6: false,
//     checkbox1_second: false,
//     checkbox2_second: false,
//     checkbox3_second: false,
//     checkbox4_second: false,
//     checkbox5_second: false,
//     checkbox6_second: false,
//   });

//   const handleChange = (event) => {
//     const { name, checked } = event.target;

//     setCheckedItems((prevState) => {
//       // If the second checkbox is clicked
//       if (name.includes("_second")) {
//         // Extract the main checkbox name
//         const mainCheckbox = name.replace("_second", "");
//         return {
//           ...prevState,
//           [mainCheckbox]: checked, // Update the main checkbox state
//           [name]: checked, // Update the second checkbox state
//         };
//       }

//       // If the main checkbox is clicked
//       return {
//         ...prevState,
//         [name]: checked, // Update the main checkbox state
//       };
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Checked items:", checkedItems);
//   };

//   return (
//     <div className="main-class-form">
//       <form onSubmit={handleSubmit}>
//         {[
//           "checkbox1",
//           "checkbox2",
//           "checkbox3",
//           "checkbox4",
//           "checkbox5",
//           "checkbox6",
//         ].map((checkbox) => (
//           <div key={checkbox} className="checkbox-row">
//             <input
//               type="checkbox"
//               name={checkbox}
//               checked={checkedItems[checkbox]}
//               onChange={handleChange}
//             />
//             <div className="all-pages-box">
//               <div className="all-pages">
//                 <span>All pages</span>
//               </div>
//               <div className="second-check-box">
//                 <input
//                   type="checkbox"
//                   name={`${checkbox}_second`}
//                   checked={checkedItems[`${checkbox}_second`]}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//         <button type="submit">Done</button>
//       </form>
//     </div>
//   );
// };

// export default DeskTop;

// import React, { useState } from "react";
// import "./desktop.css";
// import Pages from "../pages/Pages"; // Import the Pages component

// const DeskTop = () => {
//   const [checkedItems, setCheckedItems] = useState({
//     checkbox1: false,
//     checkbox2: false,
//     checkbox3: false,
//     checkbox4: false,
//     checkbox5: false,
//     checkbox6: false,
//     checkbox1_second: false,
//     checkbox2_second: false,
//     checkbox3_second: false,
//     checkbox4_second: false,
//     checkbox5_second: false,
//     checkbox6_second: false,
//     page1: false,
//     page2: false,
//     page3: false,
//   });

//   const [isPagesOpen, setIsPagesOpen] = useState(false);

//   const handleChange = (event) => {
//     const { name, checked } = event.target;

//     setCheckedItems((prevState) => {
//       // If the second checkbox is clicked
//       if (name.includes("_second")) {
//         // Extract the main checkbox name
//         const mainCheckbox = name.replace("_second", "");
//         return {
//           ...prevState,
//           [mainCheckbox]: checked, // Update the main checkbox state
//           [name]: checked, // Update the second checkbox state
//         };
//       }

//       // If the main checkbox is clicked
//       return {
//         ...prevState,
//         [name]: checked, // Update the main checkbox state
//       };
//     });

//     // Open the Pages if the "All pages" checkbox is clicked
//     if (name.includes("_second") && checked) {
//       setIsPagesOpen(true);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Checked items:", checkedItems);
//   };

//   const closePages = () => {
//     setIsPagesOpen(false);
//   };

//   return (
//     <div className="main-class-form">
//       <form onSubmit={handleSubmit}>
//         {[
//           "checkbox1",
//           "checkbox2",
//           "checkbox3",
//           "checkbox4",
//           "checkbox5",
//           "checkbox6",
//         ].map((checkbox) => (
//           <div key={checkbox} className="checkbox-row">
//             <input
//               type="checkbox"
//               name={checkbox}
//               checked={checkedItems[checkbox]}
//               onChange={handleChange}
//             />
//             <div className="all-pages-box">
//               <div className="all-pages">
//                 <span>All pages</span>
//               </div>
//               <div className="second-check-box">
//                 <input
//                   type="checkbox"
//                   name={`${checkbox}_second`}
//                   checked={checkedItems[`${checkbox}_second`]}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//         <button type="submit">Done</button>
//       </form>
//       <Pages
//         isOpen={isPagesOpen}
//         onClose={closePages}
//         checkedItems={checkedItems}
//         handleChange={handleChange}
//       />
//     </div>
//   );
// };

// export default DeskTop;

// import React, { useState } from "react";
// import "./desktop.css";
// import Pages from "../pages/Pages"; // Import the modal component

// const DeskTop = () => {
//   const [checkedItems, setCheckedItems] = useState({
//     checkbox1: false,
//     checkbox2: false,
//     checkbox3: false,
//     checkbox4: false,
//     checkbox5: false,
//     checkbox6: false,
//     checkbox1_second: false,
//     checkbox2_second: false,
//     checkbox3_second: false,
//     checkbox4_second: false,
//     checkbox5_second: false,
//     checkbox6_second: false,
//     page1: false,
//     page2: false,
//     page3: false,
//   });

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleChange = (event) => {
//     const { name, checked } = event.target;

//     setCheckedItems((prevState) => {
//       // If the second checkbox is clicked
//       if (name.includes("_second")) {
//         // Extract the main checkbox name
//         const mainCheckbox = name.replace("_second", "");
//         return {
//           ...prevState,
//           [mainCheckbox]: checked, // Update the main checkbox state
//           [name]: checked, // Update the second checkbox state
//         };
//       }

//       // If the "All pages" checkbox is clicked
//       if (name === "allPages") {
//         return {
//           ...prevState,
//           page1: checked,
//           page2: checked,
//           page3: checked,
//           [name]: checked,
//         };
//       }

//       // If a specific page checkbox is clicked
//       if (name === "page1" || name === "page2" || name === "page3") {
//         const allChecked = name === "page1" && checked && prevState.page2 && prevState.page3 ||
//                            name === "page2" && checked && prevState.page1 && prevState.page3 ||
//                            name === "page3" && checked && prevState.page1 && prevState.page2;

//         return {
//           ...prevState,
//           [name]: checked,
//           allPages: allChecked,
//         };
//       }

//       // If the main checkbox is clicked
//       return {
//         ...prevState,
//         [name]: checked, // Update the main checkbox state
//       };
//     });

//     // Open the modal if the "All pages" checkbox is clicked
//     if (name.includes("_second") && checked) {
//       setIsModalOpen(true);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Checked items:", checkedItems);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="main-class-form">
//       <form onSubmit={handleSubmit}>
//         {[
//           "checkbox1",
//           "checkbox2",
//           "checkbox3",
//           "checkbox4",
//           "checkbox5",
//           "checkbox6",
//         ].map((checkbox) => (
//           <div key={checkbox} className="checkbox-row">
//             <input
//               type="checkbox"
//               name={checkbox}
//               checked={checkedItems[checkbox]}
//               onChange={handleChange}
//             />
//             <div className="all-pages-box">
//               <div className="all-pages">
//                 <span>All pages</span>
//               </div>
//               <div className="second-check-box">
//                 <input
//                   type="checkbox"
//                   name={`${checkbox}_second`}
//                   checked={checkedItems[`${checkbox}_second`]}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//         <button type="submit">Done</button>
//       </form>
//       <Pages
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         checkedItems={checkedItems}
//         handleChange={handleChange}
//       />
//     </div>
//   );
// };

// export default DeskTop;

import React, { useState } from "react";
import "./desktop.css";
import Pages from "../pages/Pages"; // Import the modal component

const DeskTop = () => {
  const [checkedItems, setCheckedItems] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox1_second: false,
    checkbox2_second: false,
    checkbox3_second: false,
    checkbox4_second: false,
    checkbox5_second: false,
    checkbox6_second: false,
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, checked } = event.target;

    setCheckedItems((prevState) => {
      // If the second checkbox is clicked
      if (name.includes("_second")) {
        // Extract the main checkbox name
        const mainCheckbox = name.replace("_second", "");
        return {
          ...prevState,
          [mainCheckbox]: checked, // Update the main checkbox state
          [name]: checked, // Update the second checkbox state
        };
      }

      // If a specific page checkbox is clicked
      if (name === "page1" || name === "page2" || name === "page3") {
        const allChecked =
          (name === "page1" && checked && prevState.page2 && prevState.page3) ||
          (name === "page2" && checked && prevState.page1 && prevState.page3) ||
          (name === "page3" && checked && prevState.page1 && prevState.page2);

        return {
          ...prevState,
          [name]: checked,
          allPages: allChecked,
        };
      }

      // If the main checkbox is clicked
      return {
        ...prevState,
        [name]: checked, // Update the main checkbox state
      };
    });

    // Open the modal if the "All pages" checkbox is clicked
    if (name.includes("_second") && checked) {
      setIsModalOpen(true);
    }
  };

  const handleAllPagesClick = () => {
    if (!checkedItems.page1 || !checkedItems.page2 || !checkedItems.page3) {
      setErrorMessage("Please select all three pages");
      setTimeout(() => {
        setErrorMessage(""); // Clear the error message after 5 seconds
      }, 5000);
    } else {
      setErrorMessage(""); // Clear the error message immediately if conditions are met
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Checked items:", checkedItems);
  };

  const closeModal = () => {
    if (checkedItems.page1 && checkedItems.page2 && checkedItems.page3) {
      setCheckedItems((prevState) => ({
        ...prevState,
        allPages: true,
      }));
      setErrorMessage("");
    } else {
      setErrorMessage("Please select all three pages");
    }
    setIsModalOpen(false);
  };

  return (
    <div className="main-class-form">
      <form onSubmit={handleSubmit}>
        {[
          "checkbox1",
          "checkbox2",
          "checkbox3",
          "checkbox4",
          "checkbox5",
          "checkbox6",
        ].map((checkbox) => (
          <div
            key={checkbox}
            className="checkbox-row"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginBottom: "10px",
            }}
          >
            <input
              type="checkbox"
              name={checkbox}
              checked={checkedItems[checkbox]}
              onChange={handleChange}
              className="checkbox-custom"
            />

            <div className="all-pages-box">
              <div className="all-pages">
                <span onClick={handleAllPagesClick}>All pages</span>
              </div>
              <div className="second-check-box">
                <input
                  type="checkbox"
                  name={`${checkbox}_second`}
                  checked={checkedItems[`${checkbox}_second`]}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        ))}
        <button className="desktop-button" type="submit">Done</button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <Pages
        isOpen={isModalOpen}
        onClose={closeModal}
        checkedItems={checkedItems}
        handleChange={handleChange}
      />
    </div>
  );
};

export default DeskTop;
