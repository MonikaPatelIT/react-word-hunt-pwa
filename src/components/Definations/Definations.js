import React from "react";

import styles from "./Definations.module.css";

export const Definations = ({ meanings }) => {
  return (
    <div className={styles.meanings}>
      {meanings.map((mean) =>
        mean.meanings.map((item) =>
          item.definitions.map((def) => (
            <div className={styles.meaning}>
              <b>{def.definition}</b>
              <hr className={styles.devider} />
              {def.example && (
                <span>
                  <b>Example :</b> {def.example}
                </span>
              )}
              {def.synonyms.length > 0 && (
                <span>
                  <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                </span>
              )}
            </div>
          ))
        )
      )}
    </div>
  );
};
