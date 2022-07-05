import React from "react";
import Stats from "./Stats";
import featureCategories from "../../resources/pricing.json";

const Step2 = (props) => {
  const update = (tier) => {
    props.update("tier", tier);
  };
  const getActiveClass = (tier) =>
    props.form.tier === tier
      ? "text-center col-3 p-1 cursor-pointer active"
      : "text-center col-3 p-1 cursor-pointer";

  const getFeatureContent = React.useCallback((feature, tier) => {
    return (
      <>
        {feature[`textTier${tier}`] && feature[`textTier${tier}`]}
        {feature[`iconTier${tier}`] && (
          <i className={`fa-solid ${feature[`iconTier${tier}`]}`} />
        )}
      </>
    );
  }, []);

  return (
    <div className="text-start wizard-step-2">
      <h4 className="mb-3">
        Alege functionalitatile ce se potrivesc business-ului tau:
      </h4>
      <div>
        {featureCategories.map((featureCategory) => {
          return (
            <div key={featureCategory.name} className="feature-category">
              <div className="row">
                <div className="col-3 p-1">{featureCategory.name}</div>
                <div
                  className={getActiveClass("free")}
                  onClick={() => update("free")}
                />
                <div
                  className={getActiveClass("standard")}
                  onClick={() => update("standard")}
                />
                <div
                  className={getActiveClass("premium")}
                  onClick={() => update("premium")}
                />
              </div>
              {featureCategory.features.map((feature) => {
                return (
                  <div key={feature.name} className="row feature">
                    <div className="col-3 p-1">{feature.name}</div>
                    <div
                      className={getActiveClass("free")}
                      onClick={() => update("free")}
                    >
                      {getFeatureContent(feature, 1)}
                    </div>
                    <div
                      className={getActiveClass("standard")}
                      onClick={() => update("standard")}
                    >
                      {getFeatureContent(feature, 2)}
                    </div>
                    <div
                      className={getActiveClass("premium")}
                      onClick={() => update("premium")}
                    >
                      {getFeatureContent(feature, 3)}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <Stats {...props} />
    </div>
  );
};

export default Step2;
