# GrantBin Hub
A large, categorized, manually-reviewed library of various compiled binaries! Currently, the library is small (not many people have ever heard of the site). I plan for GrantBin Hub to have each binary manually-reviewed to prevent viruses. 

## Features
- **Searchability** on most engines such as Google, to prevent the pain of going through many categories and subcategories.
- **Frequent updates**, or whenever a binary is updated/uploaded.
- **Category list** for sections to tell the difference between *e.g. Minecraft Mods and OtherGame Mods*.
- **Subcategories** for determining more specifically what type of binary it is.
- **Item list** in each subcategory so you can finally find that binary you wanted.

## For Programmers

### Those who want to upload their binary(s)
To upload your app/game-mod/etc, email [gbin@babypowershell.com](mailto:gbin@babypowershell.com) a request, along with your binary. You ***will*** get a response at some point, and you may apply again if you fixed any issues I had.

### Those who are interested in expanding GrantBin Hub
This repository is just the client, meaning programmers can create their own repository of binaries, and fork this website to use their own repository. However, it is crucial to change how items/groups are discovered, as right now the web app depends on a specific HTML template from the repository. The default repository is hosted on a server running **Windows Server** with **Internet Information Services *(IIS)***, so replicating that setup will make adding your own repository as easy as editing the `.env` file (it is safe to upload the `.env` file publicly unless you add protected/sensitive content).
