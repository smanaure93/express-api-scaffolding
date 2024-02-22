import joi from "joi";

export default joi.object({
  data: joi
    .array()
    .items(
      joi
        .object()
        .keys({
          site: joi
            .string()
            .required()
            .messages({ "*": "Site must be a string" }),
          sourceId: joi
            .string()
            .required()
            .messages({ "*": "sourceId must be a string" }),
          consumerId: joi
            .string()
            .required()
            .messages({ "*": "consumerId must be a string" }),
          interactionType: joi
            .string()
            .valid("pass", "Click")
            .required()
            .messages({ "*": "interactionType must be either 'pass' or 'Click'" }),
        })
        .optional()
        .label("User interactions")
        .messages({ "*": "Invalid user interactions" })
    )
    .required(),
});
