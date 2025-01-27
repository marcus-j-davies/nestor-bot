const { MessageButton, MessageEmbed } = require("discord.js");

module.exports = {
  indice: 2,
  data: new MessageButton()
    .setEmoji("✔")
    .setStyle("SUCCESS")
    .setCustomId("finish"),
  async execute(interaction, lastFieldName) {
    const receivedEmbed = interaction.message.embeds[0];
    const templateEmbed = new MessageEmbed(receivedEmbed);

    switch (lastFieldName) {
      case "Fini":
        return await interaction.reply({ content: "Erreur: L'impression est déjà finie !", ephemeral: true });
      case "Défaut":
      case "Erreur":
      case "Téléchargé":
        return await interaction.reply({ content: "Erreur: Vous devez d'abord imprimer la pièce !", ephemeral: true });
      case "Délivré":
        return await interaction.reply({ content: "Erreur: Vous devez d'abord télécharger le fichier !", ephemeral: true });
      case "Impression":
      case "Réimpression":
        templateEmbed.setColor("GREEN");
        templateEmbed.addField("Fini", "Pièce finie d'être imprimée !\nVenez la prendre au FabLab !\n[Horaire de présence des étudiants en stage](https://antodb.be/EPHEC/cnc.html)\n\u200b");
        return await interaction.update({ embeds: [templateEmbed] });
    }
  },
};